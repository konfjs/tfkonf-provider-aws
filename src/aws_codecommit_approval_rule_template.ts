import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCodecommitApprovalRuleTemplateArgs {
  content: string;
  description?: string;
  name: string;
}

export class aws_codecommit_approval_rule_template extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCodecommitApprovalRuleTemplateArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_codecommit_approval_rule_template", resourceName);
  }

  get approval_rule_template_id(): string {
    return `${this.resourceType}.${this.resourceName}.approval_rule_template_id`;
  }

  get content(): string {
    return `${this.resourceType}.${this.resourceName}.content`;
  }

  get creation_date(): string {
    return `${this.resourceType}.${this.resourceName}.creation_date`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_modified_date(): string {
    return `${this.resourceType}.${this.resourceName}.last_modified_date`;
  }

  get last_modified_user(): string {
    return `${this.resourceType}.${this.resourceName}.last_modified_user`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get rule_content_sha256(): string {
    return `${this.resourceType}.${this.resourceName}.rule_content_sha256`;
  }
}
