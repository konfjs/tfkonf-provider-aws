import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConfigOrganizationCustomRuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsConfigOrganizationCustomRuleArgs {
  description?: string;
  excluded_accounts?: string[];
  input_parameters?: string;
  lambda_function_arn: string;
  maximum_execution_frequency?: string;
  name: string;
  resource_id_scope?: string;
  resource_types_scope?: string[];
  tag_key_scope?: string;
  tag_value_scope?: string;
  trigger_types: string[];
  timeouts?: AwsConfigOrganizationCustomRuleArgsTimeouts;
}

export class aws_config_organization_custom_rule extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsConfigOrganizationCustomRuleArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_config_organization_custom_rule", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get lambda_function_arn(): string {
    return `${this.resourceType}.${this.resourceName}.lambda_function_arn`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get trigger_types(): string {
    return `${this.resourceType}.${this.resourceName}.trigger_types`;
  }
}
