import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsKmsCustomKeyStoreArgs {
}

export class data_aws_kms_custom_key_store extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsKmsCustomKeyStoreArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_kms_custom_key_store", resourceName);
  }

  get cloud_hsm_cluster_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.cloud_hsm_cluster_id`;
  }

  get connection_state(): string {
    return `data.${this.resourceType}.${this.resourceName}.connection_state`;
  }

  get creation_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.creation_date`;
  }

  get custom_key_store_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.custom_key_store_id`;
  }

  get custom_key_store_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.custom_key_store_name`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get trust_anchor_certificate(): string {
    return `data.${this.resourceType}.${this.resourceName}.trust_anchor_certificate`;
  }
}
