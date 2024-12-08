import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEfsAccessPointsArgs {
  file_system_id: string;
}

export class data_aws_efs_access_points extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEfsAccessPointsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_efs_access_points", resourceName);
  }

  get arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.arns`;
  }

  get file_system_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.file_system_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.ids`;
  }
}
