import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsStoragegatewayWorkingStorageArgs {
  disk_id: string;
  gateway_arn: string;
}

export class aws_storagegateway_working_storage extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsStoragegatewayWorkingStorageArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_storagegateway_working_storage", resourceName);
  }

  get disk_id(): string {
    return `${this.resourceType}.${this.resourceName}.disk_id`;
  }

  get gateway_arn(): string {
    return `${this.resourceType}.${this.resourceName}.gateway_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
