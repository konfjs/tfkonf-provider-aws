import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSesReceiptFilterArgs {
  cidr: string;
  name: string;
  policy: string;
}

export class aws_ses_receipt_filter extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSesReceiptFilterArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ses_receipt_filter", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get cidr(): string {
    return `${this.resourceType}.${this.resourceName}.cidr`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }
}
