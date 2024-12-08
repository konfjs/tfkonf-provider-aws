import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCognitoUserGroupArgs {
  description?: string;
  name: string;
  precedence?: number;
  role_arn?: string;
  user_pool_id: string;
}

export class aws_cognito_user_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCognitoUserGroupArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_cognito_user_group", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get user_pool_id(): string {
    return `${this.resourceType}.${this.resourceName}.user_pool_id`;
  }
}
