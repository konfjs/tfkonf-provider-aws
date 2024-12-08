import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsBackupSelectionArgs {
  plan_id: string;
  selection_id: string;
}

export class data_aws_backup_selection extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsBackupSelectionArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_backup_selection", resourceName);
  }

  get iam_role_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.iam_role_arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get plan_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.plan_id`;
  }

  get resources(): string {
    return `data.${this.resourceType}.${this.resourceName}.resources`;
  }

  get selection_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.selection_id`;
  }
}
