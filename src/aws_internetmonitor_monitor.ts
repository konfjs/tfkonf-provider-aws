import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsInternetmonitorMonitorArgsHealthEventsConfig {
  availability_score_threshold?: number;
  performance_score_threshold?: number;
}

export interface AwsInternetmonitorMonitorArgsInternetMeasurementsLogDeliveryS3Config {
  bucket_name: string;
  bucket_prefix?: string;
  log_delivery_status?: string;
}

export interface AwsInternetmonitorMonitorArgsInternetMeasurementsLogDelivery {
  s3_config?: AwsInternetmonitorMonitorArgsInternetMeasurementsLogDeliveryS3Config;
}

export interface AwsInternetmonitorMonitorArgs {
  max_city_networks_to_monitor?: number;
  monitor_name: string;
  resources?: string[];
  status?: string;
  tags?: { [key: string]: string };
  traffic_percentage_to_monitor?: number;
  health_events_config?: AwsInternetmonitorMonitorArgsHealthEventsConfig;
  internet_measurements_log_delivery?: AwsInternetmonitorMonitorArgsInternetMeasurementsLogDelivery;
}

export class aws_internetmonitor_monitor extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsInternetmonitorMonitorArgs) {
    const meta = {health_events_config:{isBlock:true},internet_measurements_log_delivery:{isBlock:true,s3_config:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_internetmonitor_monitor", resourceName);
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
