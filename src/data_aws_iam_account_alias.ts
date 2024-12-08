import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsIamAccountAliasArgs {
}

export class data_aws_iam_account_alias extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsIamAccountAliasArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_iam_account_alias", resourceName);
  }

  get account_alias(): string {
    return `data.${this.resourceType}.${this.resourceName}.account_alias`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
