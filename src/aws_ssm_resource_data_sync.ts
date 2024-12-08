import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsmResourceDataSyncArgsS3Destination {
  bucket_name: string;
  kms_key_arn?: string;
  prefix?: string;
  region: string;
  sync_format?: string;
}

export interface AwsSsmResourceDataSyncArgs {
  name: string;
  s3_destination: AwsSsmResourceDataSyncArgsS3Destination;
}

export class aws_ssm_resource_data_sync extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSsmResourceDataSyncArgs) {
    const meta = {s3_destination:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ssm_resource_data_sync", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
