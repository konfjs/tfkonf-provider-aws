import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsBillingServiceAccountArgs {
}

export class data_aws_billing_service_account extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsBillingServiceAccountArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_billing_service_account", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
