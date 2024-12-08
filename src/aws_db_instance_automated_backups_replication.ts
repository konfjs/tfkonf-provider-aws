import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDbInstanceAutomatedBackupsReplicationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsDbInstanceAutomatedBackupsReplicationArgs {
  pre_signed_url?: string;
  retention_period?: number;
  source_db_instance_arn: string;
  timeouts?: AwsDbInstanceAutomatedBackupsReplicationArgsTimeouts;
}

export class aws_db_instance_automated_backups_replication extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDbInstanceAutomatedBackupsReplicationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_db_instance_automated_backups_replication", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get source_db_instance_arn(): string {
    return `${this.resourceType}.${this.resourceName}.source_db_instance_arn`;
  }
}
