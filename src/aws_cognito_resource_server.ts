import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCognitoResourceServerArgsScope {
  scope_description: string;
  scope_name: string;
}

export interface AwsCognitoResourceServerArgs {
  identifier: string;
  name: string;
  user_pool_id: string;
  scope?: AwsCognitoResourceServerArgsScope[];
}

export class aws_cognito_resource_server extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCognitoResourceServerArgs) {
    const meta = {scope:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_cognito_resource_server", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get identifier(): string {
    return `${this.resourceType}.${this.resourceName}.identifier`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get scope_identifiers(): string {
    return `${this.resourceType}.${this.resourceName}.scope_identifiers`;
  }

  get user_pool_id(): string {
    return `${this.resourceType}.${this.resourceName}.user_pool_id`;
  }
}
