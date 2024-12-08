import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCognitoUserGroupArgs {
  name: string;
  user_pool_id: string;
}

export class data_aws_cognito_user_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsCognitoUserGroupArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_cognito_user_group", resourceName);
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get precedence(): string {
    return `data.${this.resourceType}.${this.resourceName}.precedence`;
  }

  get role_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get user_pool_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_pool_id`;
  }
}
