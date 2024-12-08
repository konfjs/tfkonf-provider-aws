import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSecurityhubConfigurationPolicyAssociationArgsTimeouts {
  create?: string;
  update?: string;
}

export interface AwsSecurityhubConfigurationPolicyAssociationArgs {
  policy_id: string;
  target_id: string;
  timeouts?: AwsSecurityhubConfigurationPolicyAssociationArgsTimeouts;
}

export class aws_securityhub_configuration_policy_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSecurityhubConfigurationPolicyAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_securityhub_configuration_policy_association", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_id(): string {
    return `${this.resourceType}.${this.resourceName}.policy_id`;
  }

  get target_id(): string {
    return `${this.resourceType}.${this.resourceName}.target_id`;
  }
}
