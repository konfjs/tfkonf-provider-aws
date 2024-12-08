import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcNetworkPerformanceMetricSubscriptionArgs {
  destination: string;
  metric?: string;
  source: string;
  statistic?: string;
}

export class aws_vpc_network_performance_metric_subscription extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsVpcNetworkPerformanceMetricSubscriptionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_vpc_network_performance_metric_subscription", resourceName);
  }

  get destination(): string {
    return `${this.resourceType}.${this.resourceName}.destination`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get period(): string {
    return `${this.resourceType}.${this.resourceName}.period`;
  }

  get source(): string {
    return `${this.resourceType}.${this.resourceName}.source`;
  }
}
