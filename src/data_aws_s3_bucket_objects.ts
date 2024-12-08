import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsS3BucketObjectsArgs {
  bucket: string;
  delimiter?: string;
  encoding_type?: string;
  fetch_owner?: boolean;
  max_keys?: number;
  prefix?: string;
  start_after?: string;
}

export class data_aws_s3_bucket_objects extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsS3BucketObjectsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_s3_bucket_objects", resourceName);
  }

  get bucket(): string {
    return `data.${this.resourceType}.${this.resourceName}.bucket`;
  }

  get common_prefixes(): string {
    return `data.${this.resourceType}.${this.resourceName}.common_prefixes`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get keys(): string {
    return `data.${this.resourceType}.${this.resourceName}.keys`;
  }

  get owners(): string {
    return `data.${this.resourceType}.${this.resourceName}.owners`;
  }
}
