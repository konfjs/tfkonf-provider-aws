import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCognitoIdentityPoolArgs {
  identity_pool_name: string;
}

export class data_aws_cognito_identity_pool extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsCognitoIdentityPoolArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_cognito_identity_pool", resourceName);
  }

  get allow_classic_flow(): string {
    return `data.${this.resourceType}.${this.resourceName}.allow_classic_flow`;
  }

  get allow_unauthenticated_identities(): string {
    return `data.${this.resourceType}.${this.resourceName}.allow_unauthenticated_identities`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get cognito_identity_providers(): string {
    return `data.${this.resourceType}.${this.resourceName}.cognito_identity_providers`;
  }

  get developer_provider_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.developer_provider_name`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get identity_pool_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.identity_pool_name`;
  }

  get openid_connect_provider_arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.openid_connect_provider_arns`;
  }

  get saml_provider_arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.saml_provider_arns`;
  }

  get supported_login_providers(): string {
    return `data.${this.resourceType}.${this.resourceName}.supported_login_providers`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
