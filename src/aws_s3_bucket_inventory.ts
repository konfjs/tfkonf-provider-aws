import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3BucketInventoryArgsDestinationBucketEncryptionSseKms {
  key_id: string;
}

export interface AwsS3BucketInventoryArgsDestinationBucketEncryptionSseS3 {
}

export interface AwsS3BucketInventoryArgsDestinationBucketEncryption {
  sse_kms?: AwsS3BucketInventoryArgsDestinationBucketEncryptionSseKms;
  sse_s3?: AwsS3BucketInventoryArgsDestinationBucketEncryptionSseS3;
}

export interface AwsS3BucketInventoryArgsDestinationBucket {
  account_id?: string;
  bucket_arn: string;
  format: string;
  prefix?: string;
  encryption?: AwsS3BucketInventoryArgsDestinationBucketEncryption;
}

export interface AwsS3BucketInventoryArgsDestination {
  bucket: AwsS3BucketInventoryArgsDestinationBucket;
}

export interface AwsS3BucketInventoryArgsFilter {
  prefix?: string;
}

export interface AwsS3BucketInventoryArgsSchedule {
  frequency: string;
}

export interface AwsS3BucketInventoryArgs {
  bucket: string;
  enabled?: boolean;
  included_object_versions: string;
  name: string;
  optional_fields?: string[];
  destination: AwsS3BucketInventoryArgsDestination;
  filter?: AwsS3BucketInventoryArgsFilter;
  schedule: AwsS3BucketInventoryArgsSchedule;
}

export class aws_s3_bucket_inventory extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsS3BucketInventoryArgs) {
    const meta = {destination:{isBlock:true,bucket:{isBlock:true,encryption:{isBlock:true,sse_kms:{isBlock:true},sse_s3:{isBlock:true}}}},filter:{isBlock:true},schedule:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_s3_bucket_inventory", resourceName);
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get included_object_versions(): string {
    return `${this.resourceType}.${this.resourceName}.included_object_versions`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
