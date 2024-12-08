import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWafWebAclArgsDefaultAction {
  type: string;
}

export interface AwsWafWebAclArgsLoggingConfigurationRedactedFieldsFieldToMatch {
  data?: string;
  type: string;
}

export interface AwsWafWebAclArgsLoggingConfigurationRedactedFields {
  field_to_match: AwsWafWebAclArgsLoggingConfigurationRedactedFieldsFieldToMatch[];
}

export interface AwsWafWebAclArgsLoggingConfiguration {
  log_destination: string;
  redacted_fields?: AwsWafWebAclArgsLoggingConfigurationRedactedFields;
}

export interface AwsWafWebAclArgsRulesAction {
  type: string;
}

export interface AwsWafWebAclArgsRulesOverrideAction {
  type: string;
}

export interface AwsWafWebAclArgsRules {
  priority: number;
  rule_id: string;
  type?: string;
  action?: AwsWafWebAclArgsRulesAction;
  override_action?: AwsWafWebAclArgsRulesOverrideAction;
}

export interface AwsWafWebAclArgs {
  metric_name: string;
  name: string;
  tags?: { [key: string]: string };
  default_action: AwsWafWebAclArgsDefaultAction;
  logging_configuration?: AwsWafWebAclArgsLoggingConfiguration;
  rules?: AwsWafWebAclArgsRules[];
}

export class aws_waf_web_acl extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsWafWebAclArgs) {
    const meta = {default_action:{isBlock:true},logging_configuration:{isBlock:true,redacted_fields:{isBlock:true,field_to_match:{isBlock:true}}},rules:{isBlock:true,action:{isBlock:true},override_action:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_waf_web_acl", resourceName);
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
