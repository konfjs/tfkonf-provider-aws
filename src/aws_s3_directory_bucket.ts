import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3DirectoryBucketArgsLocation {
  name: string;
}

export interface AwsS3DirectoryBucketArgs {
  bucket: string;
  location?: AwsS3DirectoryBucketArgsLocation[];
}

export class aws_s3_directory_bucket extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsS3DirectoryBucketArgs) {
    const meta = {location:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_s3_directory_bucket", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get data_redundancy(): string {
    return `${this.resourceType}.${this.resourceName}.data_redundancy`;
  }

  get force_destroy(): string {
    return `${this.resourceType}.${this.resourceName}.force_destroy`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
