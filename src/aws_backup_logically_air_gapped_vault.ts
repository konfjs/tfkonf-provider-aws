import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsBackupLogicallyAirGappedVaultArgsTimeouts {
  create?: string;
}

export interface AwsBackupLogicallyAirGappedVaultArgs {
  max_retention_days: number;
  min_retention_days: number;
  name: string;
  tags?: { [key: string]: string };
  timeouts?: AwsBackupLogicallyAirGappedVaultArgsTimeouts;
}

export class aws_backup_logically_air_gapped_vault extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsBackupLogicallyAirGappedVaultArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_backup_logically_air_gapped_vault", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get max_retention_days(): string {
    return `${this.resourceType}.${this.resourceName}.max_retention_days`;
  }

  get min_retention_days(): string {
    return `${this.resourceType}.${this.resourceName}.min_retention_days`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
