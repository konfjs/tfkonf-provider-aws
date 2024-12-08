import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCognitoUserPoolClientsArgs {
  user_pool_id: string;
}

export class data_aws_cognito_user_pool_clients extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsCognitoUserPoolClientsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_cognito_user_pool_clients", resourceName);
  }

  get client_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.client_ids`;
  }

  get client_names(): string {
    return `data.${this.resourceType}.${this.resourceName}.client_names`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get user_pool_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_pool_id`;
  }
}
