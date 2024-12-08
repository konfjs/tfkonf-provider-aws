import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsKmsReplicaExternalKeyArgs {
  bypass_policy_lockout_safety_check?: boolean;
  deletion_window_in_days?: number;
  description?: string;
  key_material_base64?: string;
  primary_key_arn: string;
  tags?: { [key: string]: string };
  valid_to?: string;
}

export class aws_kms_replica_external_key extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsKmsReplicaExternalKeyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_kms_replica_external_key", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get enabled(): string {
    return `${this.resourceType}.${this.resourceName}.enabled`;
  }

  get expiration_model(): string {
    return `${this.resourceType}.${this.resourceName}.expiration_model`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key_id(): string {
    return `${this.resourceType}.${this.resourceName}.key_id`;
  }

  get key_state(): string {
    return `${this.resourceType}.${this.resourceName}.key_state`;
  }

  get key_usage(): string {
    return `${this.resourceType}.${this.resourceName}.key_usage`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }

  get primary_key_arn(): string {
    return `${this.resourceType}.${this.resourceName}.primary_key_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
