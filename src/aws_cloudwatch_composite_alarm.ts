import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudwatchCompositeAlarmArgsActionsSuppressor {
  alarm: string;
  extension_period: number;
  wait_period: number;
}

export interface AwsCloudwatchCompositeAlarmArgs {
  actions_enabled?: boolean;
  alarm_actions?: string[];
  alarm_description?: string;
  alarm_name: string;
  alarm_rule: string;
  insufficient_data_actions?: string[];
  ok_actions?: string[];
  tags?: { [key: string]: string };
  actions_suppressor?: AwsCloudwatchCompositeAlarmArgsActionsSuppressor;
}

export class aws_cloudwatch_composite_alarm extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCloudwatchCompositeAlarmArgs) {
    const meta = {actions_suppressor:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_cloudwatch_composite_alarm", resourceName);
  }

  get alarm_name(): string {
    return `${this.resourceType}.${this.resourceName}.alarm_name`;
  }

  get alarm_rule(): string {
    return `${this.resourceType}.${this.resourceName}.alarm_rule`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
