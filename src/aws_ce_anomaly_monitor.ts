import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCeAnomalyMonitorArgs {
  monitor_dimension?: string;
  monitor_specification?: string;
  monitor_type: string;
  name: string;
  tags?: { [key: string]: string };
}

export class aws_ce_anomaly_monitor extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCeAnomalyMonitorArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ce_anomaly_monitor", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get monitor_type(): string {
    return `${this.resourceType}.${this.resourceName}.monitor_type`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
