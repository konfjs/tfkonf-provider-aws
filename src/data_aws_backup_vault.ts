import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsBackupVaultArgs {
  name: string;
}

export class data_aws_backup_vault extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsBackupVaultArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_backup_vault", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_arn`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get recovery_points(): string {
    return `data.${this.resourceType}.${this.resourceName}.recovery_points`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
