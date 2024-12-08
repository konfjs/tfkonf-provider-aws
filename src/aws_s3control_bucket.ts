import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3controlBucketArgs {
  bucket: string;
  outpost_id: string;
  tags?: { [key: string]: string };
}

export class aws_s3control_bucket extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsS3controlBucketArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_s3control_bucket", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get creation_date(): string {
    return `${this.resourceType}.${this.resourceName}.creation_date`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get outpost_id(): string {
    return `${this.resourceType}.${this.resourceName}.outpost_id`;
  }

  get public_access_block_enabled(): string {
    return `${this.resourceType}.${this.resourceName}.public_access_block_enabled`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
