import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIotTopicRuleDestinationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsIotTopicRuleDestinationArgsVpcConfiguration {
  role_arn: string;
  security_groups?: string[];
  subnet_ids: string[];
  vpc_id: string;
}

export interface AwsIotTopicRuleDestinationArgs {
  enabled?: boolean;
  timeouts?: AwsIotTopicRuleDestinationArgsTimeouts;
  vpc_configuration: AwsIotTopicRuleDestinationArgsVpcConfiguration;
}

export class aws_iot_topic_rule_destination extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsIotTopicRuleDestinationArgs) {
    const meta = {timeouts:{isBlock:true},vpc_configuration:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_iot_topic_rule_destination", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
