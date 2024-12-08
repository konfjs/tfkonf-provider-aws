import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkmonitorMonitorArgs {
  monitor_name: string;
  tags?: { [key: string]: string };
}

export class aws_networkmonitor_monitor extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsNetworkmonitorMonitorArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_networkmonitor_monitor", resourceName);
  }

  get aggregation_period(): string {
    return `${this.resourceType}.${this.resourceName}.aggregation_period`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get monitor_name(): string {
    return `${this.resourceType}.${this.resourceName}.monitor_name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
