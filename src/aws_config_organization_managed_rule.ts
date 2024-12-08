import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConfigOrganizationManagedRuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsConfigOrganizationManagedRuleArgs {
  description?: string;
  excluded_accounts?: string[];
  input_parameters?: string;
  maximum_execution_frequency?: string;
  name: string;
  resource_id_scope?: string;
  resource_types_scope?: string[];
  rule_identifier: string;
  tag_key_scope?: string;
  tag_value_scope?: string;
  timeouts?: AwsConfigOrganizationManagedRuleArgsTimeouts;
}

export class aws_config_organization_managed_rule extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsConfigOrganizationManagedRuleArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_config_organization_managed_rule", resourceName);
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

  get rule_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.rule_identifier`;
  }
}
