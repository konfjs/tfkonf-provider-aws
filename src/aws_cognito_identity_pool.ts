import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCognitoIdentityPoolArgsCognitoIdentityProviders {
  client_id?: string;
  provider_name?: string;
  server_side_token_check?: boolean;
}

export interface AwsCognitoIdentityPoolArgs {
  allow_classic_flow?: boolean;
  allow_unauthenticated_identities?: boolean;
  developer_provider_name?: string;
  identity_pool_name: string;
  openid_connect_provider_arns?: string[];
  saml_provider_arns?: string[];
  supported_login_providers?: { [key: string]: string };
  tags?: { [key: string]: string };
  cognito_identity_providers?: AwsCognitoIdentityPoolArgsCognitoIdentityProviders[];
}

export class aws_cognito_identity_pool extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCognitoIdentityPoolArgs) {
    const meta = {cognito_identity_providers:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_cognito_identity_pool", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get identity_pool_name(): string {
    return `${this.resourceType}.${this.resourceName}.identity_pool_name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
