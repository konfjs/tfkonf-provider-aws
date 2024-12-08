import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudfrontMonitoringSubscriptionArgsMonitoringSubscriptionRealtimeMetricsSubscriptionConfig {
  realtime_metrics_subscription_status: string;
}

export interface AwsCloudfrontMonitoringSubscriptionArgsMonitoringSubscription {
  realtime_metrics_subscription_config: AwsCloudfrontMonitoringSubscriptionArgsMonitoringSubscriptionRealtimeMetricsSubscriptionConfig;
}

export interface AwsCloudfrontMonitoringSubscriptionArgs {
  distribution_id: string;
  monitoring_subscription: AwsCloudfrontMonitoringSubscriptionArgsMonitoringSubscription;
}

export class aws_cloudfront_monitoring_subscription extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCloudfrontMonitoringSubscriptionArgs) {
    const meta = {monitoring_subscription:{isBlock:true,realtime_metrics_subscription_config:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_cloudfront_monitoring_subscription", resourceName);
  }

  get distribution_id(): string {
    return `${this.resourceType}.${this.resourceName}.distribution_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
