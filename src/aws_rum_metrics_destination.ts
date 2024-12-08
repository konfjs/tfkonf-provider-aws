import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRumMetricsDestinationArgs {
  app_monitor_name: string;
  destination: string;
  destination_arn?: string;
  iam_role_arn?: string;
}

export class aws_rum_metrics_destination extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRumMetricsDestinationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_rum_metrics_destination", resourceName);
  }

  get app_monitor_name(): string {
    return `${this.resourceType}.${this.resourceName}.app_monitor_name`;
  }

  get destination(): string {
    return `${this.resourceType}.${this.resourceName}.destination`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
