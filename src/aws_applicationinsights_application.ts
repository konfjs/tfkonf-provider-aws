import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApplicationinsightsApplicationArgs {
  auto_config_enabled?: boolean;
  auto_create?: boolean;
  cwe_monitor_enabled?: boolean;
  grouping_type?: string;
  ops_center_enabled?: boolean;
  ops_item_sns_topic_arn?: string;
  resource_group_name: string;
  tags?: { [key: string]: string };
}

export class aws_applicationinsights_application extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsApplicationinsightsApplicationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_applicationinsights_application", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get resource_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.resource_group_name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
