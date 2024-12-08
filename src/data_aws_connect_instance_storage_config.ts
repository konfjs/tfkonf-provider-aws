import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsConnectInstanceStorageConfigArgs {
  association_id: string;
  instance_id: string;
  resource_type: string;
}

export class data_aws_connect_instance_storage_config extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsConnectInstanceStorageConfigArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_connect_instance_storage_config", resourceName);
  }

  get association_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.association_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get resource_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.resource_type`;
  }

  get storage_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.storage_config`;
  }
}
