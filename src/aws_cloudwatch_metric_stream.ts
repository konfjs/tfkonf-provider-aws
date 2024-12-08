import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudwatchMetricStreamArgsExcludeFilter {
  metric_names?: string[];
  namespace: string;
}

export interface AwsCloudwatchMetricStreamArgsIncludeFilter {
  metric_names?: string[];
  namespace: string;
}

export interface AwsCloudwatchMetricStreamArgsStatisticsConfigurationIncludeMetric {
  metric_name: string;
  namespace: string;
}

export interface AwsCloudwatchMetricStreamArgsStatisticsConfiguration {
  additional_statistics: string[];
  include_metric: AwsCloudwatchMetricStreamArgsStatisticsConfigurationIncludeMetric[];
}

export interface AwsCloudwatchMetricStreamArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsCloudwatchMetricStreamArgs {
  firehose_arn: string;
  include_linked_accounts_metrics?: boolean;
  output_format: string;
  role_arn: string;
  tags?: { [key: string]: string };
  exclude_filter?: AwsCloudwatchMetricStreamArgsExcludeFilter[];
  include_filter?: AwsCloudwatchMetricStreamArgsIncludeFilter[];
  statistics_configuration?: AwsCloudwatchMetricStreamArgsStatisticsConfiguration[];
  timeouts?: AwsCloudwatchMetricStreamArgsTimeouts;
}

export class aws_cloudwatch_metric_stream extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCloudwatchMetricStreamArgs) {
    const meta = {exclude_filter:{isBlock:true},include_filter:{isBlock:true},statistics_configuration:{isBlock:true,include_metric:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_cloudwatch_metric_stream", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get creation_date(): string {
    return `${this.resourceType}.${this.resourceName}.creation_date`;
  }

  get firehose_arn(): string {
    return `${this.resourceType}.${this.resourceName}.firehose_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_update_date(): string {
    return `${this.resourceType}.${this.resourceName}.last_update_date`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get output_format(): string {
    return `${this.resourceType}.${this.resourceName}.output_format`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
