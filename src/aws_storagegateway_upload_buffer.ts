import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsStoragegatewayUploadBufferArgs {
  gateway_arn: string;
}

export class aws_storagegateway_upload_buffer extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsStoragegatewayUploadBufferArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_storagegateway_upload_buffer", resourceName);
  }

  get disk_id(): string {
    return `${this.resourceType}.${this.resourceName}.disk_id`;
  }

  get disk_path(): string {
    return `${this.resourceType}.${this.resourceName}.disk_path`;
  }

  get gateway_arn(): string {
    return `${this.resourceType}.${this.resourceName}.gateway_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
