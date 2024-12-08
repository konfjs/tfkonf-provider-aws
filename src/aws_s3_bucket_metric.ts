import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3BucketMetricArgsFilter {
  access_point?: string;
  prefix?: string;
  tags?: { [key: string]: string };
}

export interface AwsS3BucketMetricArgs {
  bucket: string;
  name: string;
  filter?: AwsS3BucketMetricArgsFilter;
}

export class aws_s3_bucket_metric extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsS3BucketMetricArgs) {
    const meta = {filter:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_s3_bucket_metric", resourceName);
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
