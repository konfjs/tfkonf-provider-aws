import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConfigConfigRuleArgsEvaluationMode {
}

export interface AwsConfigConfigRuleArgsScope {
  compliance_resource_id?: string;
  compliance_resource_types?: string[];
  tag_key?: string;
  tag_value?: string;
}

export interface AwsConfigConfigRuleArgsSourceCustomPolicyDetails {
  enable_debug_log_delivery?: boolean;
  policy_runtime: string;
  policy_text: string;
}

export interface AwsConfigConfigRuleArgsSourceSourceDetail {
  event_source?: string;
  maximum_execution_frequency?: string;
  message_type?: string;
}

export interface AwsConfigConfigRuleArgsSource {
  owner: string;
  source_identifier?: string;
  custom_policy_details?: AwsConfigConfigRuleArgsSourceCustomPolicyDetails;
  source_detail?: AwsConfigConfigRuleArgsSourceSourceDetail[];
}

export interface AwsConfigConfigRuleArgs {
  description?: string;
  input_parameters?: string;
  maximum_execution_frequency?: string;
  name: string;
  tags?: { [key: string]: string };
  evaluation_mode?: AwsConfigConfigRuleArgsEvaluationMode[];
  scope?: AwsConfigConfigRuleArgsScope;
  source: AwsConfigConfigRuleArgsSource;
}

export class aws_config_config_rule extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsConfigConfigRuleArgs) {
    const meta = {evaluation_mode:{isBlock:true},scope:{isBlock:true},source:{isBlock:true,custom_policy_details:{isBlock:true},source_detail:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_config_config_rule", resourceName);
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

  get rule_id(): string {
    return `${this.resourceType}.${this.resourceName}.rule_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
