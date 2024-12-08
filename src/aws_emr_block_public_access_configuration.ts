import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEmrBlockPublicAccessConfigurationArgsPermittedPublicSecurityGroupRuleRange {
  max_range: number;
  min_range: number;
}

export interface AwsEmrBlockPublicAccessConfigurationArgs {
  block_public_security_group_rules: boolean;
  permitted_public_security_group_rule_range?: AwsEmrBlockPublicAccessConfigurationArgsPermittedPublicSecurityGroupRuleRange[];
}

export class aws_emr_block_public_access_configuration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEmrBlockPublicAccessConfigurationArgs) {
    const meta = {permitted_public_security_group_rule_range:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_emr_block_public_access_configuration", resourceName);
  }

  get block_public_security_group_rules(): string {
    return `${this.resourceType}.${this.resourceName}.block_public_security_group_rules`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
