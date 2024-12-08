import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCognitoUserPoolClientArgs {
  client_id: string;
  user_pool_id: string;
}

export class data_aws_cognito_user_pool_client extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsCognitoUserPoolClientArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_cognito_user_pool_client", resourceName);
  }

  get access_token_validity(): string {
    return `data.${this.resourceType}.${this.resourceName}.access_token_validity`;
  }

  get allowed_oauth_flows(): string {
    return `data.${this.resourceType}.${this.resourceName}.allowed_oauth_flows`;
  }

  get allowed_oauth_flows_user_pool_client(): string {
    return `data.${this.resourceType}.${this.resourceName}.allowed_oauth_flows_user_pool_client`;
  }

  get allowed_oauth_scopes(): string {
    return `data.${this.resourceType}.${this.resourceName}.allowed_oauth_scopes`;
  }

  get analytics_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.analytics_configuration`;
  }

  get callback_urls(): string {
    return `data.${this.resourceType}.${this.resourceName}.callback_urls`;
  }

  get client_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.client_id`;
  }

  get client_secret(): string {
    return `data.${this.resourceType}.${this.resourceName}.client_secret`;
  }

  get default_redirect_uri(): string {
    return `data.${this.resourceType}.${this.resourceName}.default_redirect_uri`;
  }

  get enable_propagate_additional_user_context_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_propagate_additional_user_context_data`;
  }

  get enable_token_revocation(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_token_revocation`;
  }

  get explicit_auth_flows(): string {
    return `data.${this.resourceType}.${this.resourceName}.explicit_auth_flows`;
  }

  get generate_secret(): string {
    return `data.${this.resourceType}.${this.resourceName}.generate_secret`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get id_token_validity(): string {
    return `data.${this.resourceType}.${this.resourceName}.id_token_validity`;
  }

  get logout_urls(): string {
    return `data.${this.resourceType}.${this.resourceName}.logout_urls`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get prevent_user_existence_errors(): string {
    return `data.${this.resourceType}.${this.resourceName}.prevent_user_existence_errors`;
  }

  get read_attributes(): string {
    return `data.${this.resourceType}.${this.resourceName}.read_attributes`;
  }

  get refresh_token_validity(): string {
    return `data.${this.resourceType}.${this.resourceName}.refresh_token_validity`;
  }

  get supported_identity_providers(): string {
    return `data.${this.resourceType}.${this.resourceName}.supported_identity_providers`;
  }

  get token_validity_units(): string {
    return `data.${this.resourceType}.${this.resourceName}.token_validity_units`;
  }

  get user_pool_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_pool_id`;
  }

  get write_attributes(): string {
    return `data.${this.resourceType}.${this.resourceName}.write_attributes`;
  }
}
