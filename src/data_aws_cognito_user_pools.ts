import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCognitoUserPoolsArgs {
  name: string;
}

export class data_aws_cognito_user_pools extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsCognitoUserPoolsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_cognito_user_pools", resourceName);
  }

  get arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.arns`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.ids`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }
}
