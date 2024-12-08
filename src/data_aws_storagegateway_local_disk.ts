import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsStoragegatewayLocalDiskArgs {
  gateway_arn: string;
}

export class data_aws_storagegateway_local_disk extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsStoragegatewayLocalDiskArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_storagegateway_local_disk", resourceName);
  }

  get disk_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.disk_id`;
  }

  get disk_node(): string {
    return `data.${this.resourceType}.${this.resourceName}.disk_node`;
  }

  get disk_path(): string {
    return `data.${this.resourceType}.${this.resourceName}.disk_path`;
  }

  get gateway_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.gateway_arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
