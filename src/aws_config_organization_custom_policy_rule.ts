import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConfigOrganizationCustomPolicyRuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsConfigOrganizationCustomPolicyRuleArgs {
  debug_log_delivery_accounts?: string[];
  description?: string;
  excluded_accounts?: string[];
  input_parameters?: string;
  maximum_execution_frequency?: string;
  name: string;
  policy_runtime: string;
  policy_text: string;
  resource_id_scope?: string;
  resource_types_scope?: string[];
  tag_key_scope?: string;
  tag_value_scope?: string;
  trigger_types: string[];
  timeouts?: AwsConfigOrganizationCustomPolicyRuleArgsTimeouts;
}

export class aws_config_organization_custom_policy_rule extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsConfigOrganizationCustomPolicyRuleArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_config_organization_custom_policy_rule", resourceName);
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

  get policy_runtime(): string {
    return `${this.resourceType}.${this.resourceName}.policy_runtime`;
  }

  get policy_text(): string {
    return `${this.resourceType}.${this.resourceName}.policy_text`;
  }

  get trigger_types(): string {
    return `${this.resourceType}.${this.resourceName}.trigger_types`;
  }
}
