import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsStoragegatewayTapePoolArgs {
  pool_name: string;
  retention_lock_time_in_days?: number;
  retention_lock_type?: string;
  storage_class: string;
  tags?: { [key: string]: string };
}

export class aws_storagegateway_tape_pool extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsStoragegatewayTapePoolArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_storagegateway_tape_pool", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get pool_name(): string {
    return `${this.resourceType}.${this.resourceName}.pool_name`;
  }

  get storage_class(): string {
    return `${this.resourceType}.${this.resourceName}.storage_class`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
