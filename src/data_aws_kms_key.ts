import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsKmsKeyArgs {
  grant_tokens?: string[];
  key_id: string;
}

export class data_aws_kms_key extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsKmsKeyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_kms_key", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get aws_account_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.aws_account_id`;
  }

  get cloud_hsm_cluster_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.cloud_hsm_cluster_id`;
  }

  get creation_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.creation_date`;
  }

  get custom_key_store_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.custom_key_store_id`;
  }

  get customer_master_key_spec(): string {
    return `data.${this.resourceType}.${this.resourceName}.customer_master_key_spec`;
  }

  get deletion_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.deletion_date`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get enabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.enabled`;
  }

  get expiration_model(): string {
    return `data.${this.resourceType}.${this.resourceName}.expiration_model`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get key_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.key_id`;
  }

  get key_manager(): string {
    return `data.${this.resourceType}.${this.resourceName}.key_manager`;
  }

  get key_spec(): string {
    return `data.${this.resourceType}.${this.resourceName}.key_spec`;
  }

  get key_state(): string {
    return `data.${this.resourceType}.${this.resourceName}.key_state`;
  }

  get key_usage(): string {
    return `data.${this.resourceType}.${this.resourceName}.key_usage`;
  }

  get multi_region(): string {
    return `data.${this.resourceType}.${this.resourceName}.multi_region`;
  }

  get multi_region_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.multi_region_configuration`;
  }

  get origin(): string {
    return `data.${this.resourceType}.${this.resourceName}.origin`;
  }

  get pending_deletion_window_in_days(): string {
    return `data.${this.resourceType}.${this.resourceName}.pending_deletion_window_in_days`;
  }

  get valid_to(): string {
    return `data.${this.resourceType}.${this.resourceName}.valid_to`;
  }

  get xks_key_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.xks_key_configuration`;
  }
}
