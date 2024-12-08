import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsBackupVaultArgsTimeouts {
  delete?: string;
}

export interface AwsBackupVaultArgs {
  force_destroy?: boolean;
  name: string;
  tags?: { [key: string]: string };
  timeouts?: AwsBackupVaultArgsTimeouts;
}

export class aws_backup_vault extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsBackupVaultArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_backup_vault", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_arn(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_arn`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get recovery_points(): string {
    return `${this.resourceType}.${this.resourceName}.recovery_points`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
