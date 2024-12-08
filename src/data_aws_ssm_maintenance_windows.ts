import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSsmMaintenanceWindowsArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsSsmMaintenanceWindowsArgs {
  filter?: DataAwsSsmMaintenanceWindowsArgsFilter[];
}

export class data_aws_ssm_maintenance_windows extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsSsmMaintenanceWindowsArgs) {
    const meta = {filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ssm_maintenance_windows", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.ids`;
  }
}
