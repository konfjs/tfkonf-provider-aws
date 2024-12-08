import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsKmsKeyArgsTimeouts {
  create?: string;
}

export interface AwsKmsKeyArgs {
  bypass_policy_lockout_safety_check?: boolean;
  custom_key_store_id?: string;
  customer_master_key_spec?: string;
  deletion_window_in_days?: number;
  enable_key_rotation?: boolean;
  is_enabled?: boolean;
  key_usage?: string;
  tags?: { [key: string]: string };
  xks_key_id?: string;
  timeouts?: AwsKmsKeyArgsTimeouts;
}

export class aws_kms_key extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsKmsKeyArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_kms_key", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key_id(): string {
    return `${this.resourceType}.${this.resourceName}.key_id`;
  }

  get multi_region(): string {
    return `${this.resourceType}.${this.resourceName}.multi_region`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }

  get rotation_period_in_days(): string {
    return `${this.resourceType}.${this.resourceName}.rotation_period_in_days`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
