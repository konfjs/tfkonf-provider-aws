import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsS3DirectoryBucketsArgs {
}

export class data_aws_s3_directory_buckets extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsS3DirectoryBucketsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_s3_directory_buckets", resourceName);
  }

  get arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.arns`;
  }

  get buckets(): string {
    return `data.${this.resourceType}.${this.resourceName}.buckets`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
