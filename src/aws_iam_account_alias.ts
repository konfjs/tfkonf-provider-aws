import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamAccountAliasArgs {
  account_alias: string;
}

export class aws_iam_account_alias extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsIamAccountAliasArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iam_account_alias", resourceName);
  }

  get account_alias(): string {
    return `${this.resourceType}.${this.resourceName}.account_alias`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
