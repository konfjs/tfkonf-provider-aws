import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsS3BucketArgs {
  bucket: string;
}

export class data_aws_s3_bucket extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsS3BucketArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_s3_bucket", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get bucket(): string {
    return `data.${this.resourceType}.${this.resourceName}.bucket`;
  }

  get bucket_domain_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.bucket_domain_name`;
  }

  get bucket_regional_domain_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.bucket_regional_domain_name`;
  }

  get hosted_zone_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.hosted_zone_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get region(): string {
    return `data.${this.resourceType}.${this.resourceName}.region`;
  }

  get website_domain(): string {
    return `data.${this.resourceType}.${this.resourceName}.website_domain`;
  }

  get website_endpoint(): string {
    return `data.${this.resourceType}.${this.resourceName}.website_endpoint`;
  }
}
