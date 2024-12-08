import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsKmsCustomKeyStoreArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsKmsCustomKeyStoreArgs {
  cloud_hsm_cluster_id: string;
  custom_key_store_name: string;
  key_store_password: string;
  trust_anchor_certificate: string;
  timeouts?: AwsKmsCustomKeyStoreArgsTimeouts;
}

export class aws_kms_custom_key_store extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsKmsCustomKeyStoreArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_kms_custom_key_store", resourceName);
  }

  get cloud_hsm_cluster_id(): string {
    return `${this.resourceType}.${this.resourceName}.cloud_hsm_cluster_id`;
  }

  get custom_key_store_name(): string {
    return `${this.resourceType}.${this.resourceName}.custom_key_store_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key_store_password(): string {
    return `${this.resourceType}.${this.resourceName}.key_store_password`;
  }

  get trust_anchor_certificate(): string {
    return `${this.resourceType}.${this.resourceName}.trust_anchor_certificate`;
  }
}
