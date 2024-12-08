import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSesReceiptRuleSetArgs {
  rule_set_name: string;
}

export class aws_ses_receipt_rule_set extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSesReceiptRuleSetArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ses_receipt_rule_set", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get rule_set_name(): string {
    return `${this.resourceType}.${this.resourceName}.rule_set_name`;
  }
}
