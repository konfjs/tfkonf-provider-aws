import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRedshiftserverlessSnapshotArgs {
  namespace_name: string;
  retention_period?: number;
  snapshot_name: string;
}

export class aws_redshiftserverless_snapshot extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRedshiftserverlessSnapshotArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_redshiftserverless_snapshot", resourceName);
  }

  get accounts_with_provisioned_restore_access(): string {
    return `${this.resourceType}.${this.resourceName}.accounts_with_provisioned_restore_access`;
  }

  get accounts_with_restore_access(): string {
    return `${this.resourceType}.${this.resourceName}.accounts_with_restore_access`;
  }

  get admin_username(): string {
    return `${this.resourceType}.${this.resourceName}.admin_username`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get namespace_arn(): string {
    return `${this.resourceType}.${this.resourceName}.namespace_arn`;
  }

  get namespace_name(): string {
    return `${this.resourceType}.${this.resourceName}.namespace_name`;
  }

  get owner_account(): string {
    return `${this.resourceType}.${this.resourceName}.owner_account`;
  }

  get snapshot_name(): string {
    return `${this.resourceType}.${this.resourceName}.snapshot_name`;
  }
}
