import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsmMaintenanceWindowTargetArgsTargets {
  key: string;
  values: string[];
}

export interface AwsSsmMaintenanceWindowTargetArgs {
  description?: string;
  name?: string;
  owner_information?: string;
  resource_type: string;
  window_id: string;
  targets: AwsSsmMaintenanceWindowTargetArgsTargets[];
}

export class aws_ssm_maintenance_window_target extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSsmMaintenanceWindowTargetArgs) {
    const meta = {targets:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ssm_maintenance_window_target", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get resource_type(): string {
    return `${this.resourceType}.${this.resourceName}.resource_type`;
  }

  get window_id(): string {
    return `${this.resourceType}.${this.resourceName}.window_id`;
  }
}
