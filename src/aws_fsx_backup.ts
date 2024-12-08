import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsFsxBackupArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsFsxBackupArgs {
  file_system_id?: string;
  tags?: { [key: string]: string };
  volume_id?: string;
  timeouts?: AwsFsxBackupArgsTimeouts;
}

export class aws_fsx_backup extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsFsxBackupArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_fsx_backup", resourceName);
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

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
