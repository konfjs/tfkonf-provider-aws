import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCognitoUserInGroupArgs {
  group_name: string;
  user_pool_id: string;
  username: string;
}

export class aws_cognito_user_in_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCognitoUserInGroupArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_cognito_user_in_group", resourceName);
  }

  get group_name(): string {
    return `${this.resourceType}.${this.resourceName}.group_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get user_pool_id(): string {
    return `${this.resourceType}.${this.resourceName}.user_pool_id`;
  }

  get username(): string {
    return `${this.resourceType}.${this.resourceName}.username`;
  }
}
