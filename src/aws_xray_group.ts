import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsXrayGroupArgsInsightsConfiguration {
  insights_enabled: boolean;
}

export interface AwsXrayGroupArgs {
  filter_expression: string;
  group_name: string;
  tags?: { [key: string]: string };
  insights_configuration?: AwsXrayGroupArgsInsightsConfiguration;
}

export class aws_xray_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsXrayGroupArgs) {
    const meta = {insights_configuration:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_xray_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get filter_expression(): string {
    return `${this.resourceType}.${this.resourceName}.filter_expression`;
  }

  get group_name(): string {
    return `${this.resourceType}.${this.resourceName}.group_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
