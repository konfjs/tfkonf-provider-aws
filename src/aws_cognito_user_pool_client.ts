import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCognitoUserPoolClientArgsAnalyticsConfiguration {
  application_arn?: string;
  application_id?: string;
  external_id?: string;
}

export interface AwsCognitoUserPoolClientArgsTokenValidityUnits {
}

export interface AwsCognitoUserPoolClientArgs {
  generate_secret?: boolean;
  name: string;
  user_pool_id: string;
  analytics_configuration?: AwsCognitoUserPoolClientArgsAnalyticsConfiguration[];
  token_validity_units?: AwsCognitoUserPoolClientArgsTokenValidityUnits[];
}

export class aws_cognito_user_pool_client extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCognitoUserPoolClientArgs) {
    const meta = {analytics_configuration:{isBlock:true},token_validity_units:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_cognito_user_pool_client", resourceName);
  }

  get access_token_validity(): string {
    return `${this.resourceType}.${this.resourceName}.access_token_validity`;
  }

  get allowed_oauth_flows(): string {
    return `${this.resourceType}.${this.resourceName}.allowed_oauth_flows`;
  }

  get allowed_oauth_flows_user_pool_client(): string {
    return `${this.resourceType}.${this.resourceName}.allowed_oauth_flows_user_pool_client`;
  }

  get allowed_oauth_scopes(): string {
    return `${this.resourceType}.${this.resourceName}.allowed_oauth_scopes`;
  }

  get auth_session_validity(): string {
    return `${this.resourceType}.${this.resourceName}.auth_session_validity`;
  }

  get callback_urls(): string {
    return `${this.resourceType}.${this.resourceName}.callback_urls`;
  }

  get client_secret(): string {
    return `${this.resourceType}.${this.resourceName}.client_secret`;
  }

  get default_redirect_uri(): string {
    return `${this.resourceType}.${this.resourceName}.default_redirect_uri`;
  }

  get enable_propagate_additional_user_context_data(): string {
    return `${this.resourceType}.${this.resourceName}.enable_propagate_additional_user_context_data`;
  }

  get enable_token_revocation(): string {
    return `${this.resourceType}.${this.resourceName}.enable_token_revocation`;
  }

  get explicit_auth_flows(): string {
    return `${this.resourceType}.${this.resourceName}.explicit_auth_flows`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get id_token_validity(): string {
    return `${this.resourceType}.${this.resourceName}.id_token_validity`;
  }

  get logout_urls(): string {
    return `${this.resourceType}.${this.resourceName}.logout_urls`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get prevent_user_existence_errors(): string {
    return `${this.resourceType}.${this.resourceName}.prevent_user_existence_errors`;
  }

  get read_attributes(): string {
    return `${this.resourceType}.${this.resourceName}.read_attributes`;
  }

  get refresh_token_validity(): string {
    return `${this.resourceType}.${this.resourceName}.refresh_token_validity`;
  }

  get supported_identity_providers(): string {
    return `${this.resourceType}.${this.resourceName}.supported_identity_providers`;
  }

  get user_pool_id(): string {
    return `${this.resourceType}.${this.resourceName}.user_pool_id`;
  }

  get write_attributes(): string {
    return `${this.resourceType}.${this.resourceName}.write_attributes`;
  }
}
