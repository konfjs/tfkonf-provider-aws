import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWafregionalWebAclArgsDefaultAction {
  type: string;
}

export interface AwsWafregionalWebAclArgsLoggingConfigurationRedactedFieldsFieldToMatch {
  data?: string;
  type: string;
}

export interface AwsWafregionalWebAclArgsLoggingConfigurationRedactedFields {
  field_to_match: AwsWafregionalWebAclArgsLoggingConfigurationRedactedFieldsFieldToMatch[];
}

export interface AwsWafregionalWebAclArgsLoggingConfiguration {
  log_destination: string;
  redacted_fields?: AwsWafregionalWebAclArgsLoggingConfigurationRedactedFields;
}

export interface AwsWafregionalWebAclArgsRuleAction {
  type: string;
}

export interface AwsWafregionalWebAclArgsRuleOverrideAction {
  type: string;
}

export interface AwsWafregionalWebAclArgsRule {
  priority: number;
  rule_id: string;
  type?: string;
  action?: AwsWafregionalWebAclArgsRuleAction;
  override_action?: AwsWafregionalWebAclArgsRuleOverrideAction;
}

export interface AwsWafregionalWebAclArgs {
  metric_name: string;
  name: string;
  tags?: { [key: string]: string };
  default_action: AwsWafregionalWebAclArgsDefaultAction;
  logging_configuration?: AwsWafregionalWebAclArgsLoggingConfiguration;
  rule?: AwsWafregionalWebAclArgsRule[];
}

export class aws_wafregional_web_acl extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsWafregionalWebAclArgs) {
    const meta = {default_action:{isBlock:true},logging_configuration:{isBlock:true,redacted_fields:{isBlock:true,field_to_match:{isBlock:true}}},rule:{isBlock:true,action:{isBlock:true},override_action:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_wafregional_web_acl", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get metric_name(): string {
    return `${this.resourceType}.${this.resourceName}.metric_name`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
