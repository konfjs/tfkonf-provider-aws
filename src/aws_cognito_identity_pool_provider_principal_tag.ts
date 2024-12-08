import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCognitoIdentityPoolProviderPrincipalTagArgs {
  identity_pool_id: string;
  identity_provider_name: string;
  principal_tags?: { [key: string]: string };
  use_defaults?: boolean;
}

export class aws_cognito_identity_pool_provider_principal_tag extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCognitoIdentityPoolProviderPrincipalTagArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_cognito_identity_pool_provider_principal_tag", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get identity_pool_id(): string {
    return `${this.resourceType}.${this.resourceName}.identity_pool_id`;
  }

  get identity_provider_name(): string {
    return `${this.resourceType}.${this.resourceName}.identity_provider_name`;
  }
}
