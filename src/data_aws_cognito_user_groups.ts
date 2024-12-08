import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCognitoUserGroupsArgs {
  user_pool_id: string;
}

export class data_aws_cognito_user_groups extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsCognitoUserGroupsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_cognito_user_groups", resourceName);
  }

  get groups(): string {
    return `data.${this.resourceType}.${this.resourceName}.groups`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get user_pool_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_pool_id`;
  }
}
