import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudwatchEventRuleArgs {
  description?: string;
  event_bus_name?: string;
  event_pattern?: string;
  force_destroy?: boolean;
  is_enabled?: boolean;
  role_arn?: string;
  schedule_expression?: string;
  state?: string;
  tags?: { [key: string]: string };
}

export class aws_cloudwatch_event_rule extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCloudwatchEventRuleArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_cloudwatch_event_rule", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
