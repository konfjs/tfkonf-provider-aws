import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVerifiedpermissionsPolicyTemplateArgs {
  description?: string;
  policy_store_id: string;
  statement: string;
}

export class aws_verifiedpermissions_policy_template extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsVerifiedpermissionsPolicyTemplateArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_verifiedpermissions_policy_template", resourceName);
  }

  get created_date(): string {
    return `${this.resourceType}.${this.resourceName}.created_date`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_store_id(): string {
    return `${this.resourceType}.${this.resourceName}.policy_store_id`;
  }

  get policy_template_id(): string {
    return `${this.resourceType}.${this.resourceName}.policy_template_id`;
  }

  get statement(): string {
    return `${this.resourceType}.${this.resourceName}.statement`;
  }
}
