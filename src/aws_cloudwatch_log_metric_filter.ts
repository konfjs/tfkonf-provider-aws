import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudwatchLogMetricFilterArgsMetricTransformation {
  default_value?: string;
  dimensions?: { [key: string]: string };
  name: string;
  namespace: string;
  unit?: string;
  value: string;
}

export interface AwsCloudwatchLogMetricFilterArgs {
  log_group_name: string;
  name: string;
  pattern: string;
  metric_transformation: AwsCloudwatchLogMetricFilterArgsMetricTransformation;
}

export class aws_cloudwatch_log_metric_filter extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCloudwatchLogMetricFilterArgs) {
    const meta = {metric_transformation:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_cloudwatch_log_metric_filter", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get log_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.log_group_name`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get pattern(): string {
    return `${this.resourceType}.${this.resourceName}.pattern`;
  }
}
