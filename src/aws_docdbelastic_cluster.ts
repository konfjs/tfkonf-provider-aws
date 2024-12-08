import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDocdbelasticClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsDocdbelasticClusterArgs {
  admin_user_name: string;
  admin_user_password: string;
  auth_type: string;
  name: string;
  shard_capacity: number;
  shard_count: number;
  tags?: { [key: string]: string };
  timeouts?: AwsDocdbelasticClusterArgsTimeouts;
}

export class aws_docdbelastic_cluster extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDocdbelasticClusterArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_docdbelastic_cluster", resourceName);
  }

  get admin_user_name(): string {
    return `${this.resourceType}.${this.resourceName}.admin_user_name`;
  }

  get admin_user_password(): string {
    return `${this.resourceType}.${this.resourceName}.admin_user_password`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get auth_type(): string {
    return `${this.resourceType}.${this.resourceName}.auth_type`;
  }

  get backup_retention_period(): string {
    return `${this.resourceType}.${this.resourceName}.backup_retention_period`;
  }

  get endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get preferred_backup_window(): string {
    return `${this.resourceType}.${this.resourceName}.preferred_backup_window`;
  }

  get preferred_maintenance_window(): string {
    return `${this.resourceType}.${this.resourceName}.preferred_maintenance_window`;
  }

  get shard_capacity(): string {
    return `${this.resourceType}.${this.resourceName}.shard_capacity`;
  }

  get shard_count(): string {
    return `${this.resourceType}.${this.resourceName}.shard_count`;
  }

  get subnet_ids(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_ids`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vpc_security_group_ids(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_security_group_ids`;
  }
}
