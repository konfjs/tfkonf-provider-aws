import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCodecommitApprovalRuleTemplateArgs {
  name: string;
}

export class data_aws_codecommit_approval_rule_template extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsCodecommitApprovalRuleTemplateArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_codecommit_approval_rule_template", resourceName);
  }

  get approval_rule_template_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.approval_rule_template_id`;
  }

  get content(): string {
    return `data.${this.resourceType}.${this.resourceName}.content`;
  }

  get creation_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.creation_date`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get last_modified_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_modified_date`;
  }

  get last_modified_user(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_modified_user`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get rule_content_sha256(): string {
    return `data.${this.resourceType}.${this.resourceName}.rule_content_sha256`;
  }
}
