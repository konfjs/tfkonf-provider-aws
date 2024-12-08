import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCodecommitApprovalRuleTemplateAssociationArgs {
  approval_rule_template_name: string;
  repository_name: string;
}

export class aws_codecommit_approval_rule_template_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCodecommitApprovalRuleTemplateAssociationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_codecommit_approval_rule_template_association", resourceName);
  }

  get approval_rule_template_name(): string {
    return `${this.resourceType}.${this.resourceName}.approval_rule_template_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get repository_name(): string {
    return `${this.resourceType}.${this.resourceName}.repository_name`;
  }
}
