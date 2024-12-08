import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsPaymentcryptographyKeyAliasArgs {
  alias_name: string;
  key_arn?: string;
}

export class aws_paymentcryptography_key_alias extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsPaymentcryptographyKeyAliasArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_paymentcryptography_key_alias", resourceName);
  }

  get alias_name(): string {
    return `${this.resourceType}.${this.resourceName}.alias_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
