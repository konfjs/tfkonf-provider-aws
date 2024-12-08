import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsKmsReplicaKeyArgs {
  bypass_policy_lockout_safety_check?: boolean;
  deletion_window_in_days?: number;
  description?: string;
  enabled?: boolean;
  primary_key_arn: string;
  tags?: { [key: string]: string };
}

export class aws_kms_replica_key extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsKmsReplicaKeyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_kms_replica_key", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key_id(): string {
    return `${this.resourceType}.${this.resourceName}.key_id`;
  }

  get key_rotation_enabled(): string {
    return `${this.resourceType}.${this.resourceName}.key_rotation_enabled`;
  }

  get key_spec(): string {
    return `${this.resourceType}.${this.resourceName}.key_spec`;
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
