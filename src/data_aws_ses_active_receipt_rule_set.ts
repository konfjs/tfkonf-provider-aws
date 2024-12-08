import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSesActiveReceiptRuleSetArgs {
}

export class data_aws_ses_active_receipt_rule_set extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsSesActiveReceiptRuleSetArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_ses_active_receipt_rule_set", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get rule_set_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.rule_set_name`;
  }
}
