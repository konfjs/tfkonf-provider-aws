import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVerifiedpermissionsIdentitySourceArgsConfigurationCognitoUserPoolConfigurationGroupConfiguration {
  group_entity_type: string;
}

export interface AwsVerifiedpermissionsIdentitySourceArgsConfigurationCognitoUserPoolConfiguration {
  user_pool_arn: string;
  group_configuration?: AwsVerifiedpermissionsIdentitySourceArgsConfigurationCognitoUserPoolConfigurationGroupConfiguration[];
}

export interface AwsVerifiedpermissionsIdentitySourceArgsConfigurationOpenIdConnectConfigurationGroupConfiguration {
  group_claim: string;
  group_entity_type: string;
}

export interface AwsVerifiedpermissionsIdentitySourceArgsConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly {
  audiences?: string[];
  principal_id_claim?: string;
}

export interface AwsVerifiedpermissionsIdentitySourceArgsConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly {
  client_ids?: string[];
  principal_id_claim?: string;
}

export interface AwsVerifiedpermissionsIdentitySourceArgsConfigurationOpenIdConnectConfigurationTokenSelection {
  access_token_only?: AwsVerifiedpermissionsIdentitySourceArgsConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly[];
  identity_token_only?: AwsVerifiedpermissionsIdentitySourceArgsConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly[];
}

export interface AwsVerifiedpermissionsIdentitySourceArgsConfigurationOpenIdConnectConfiguration {
  entity_id_prefix?: string;
  issuer: string;
  group_configuration?: AwsVerifiedpermissionsIdentitySourceArgsConfigurationOpenIdConnectConfigurationGroupConfiguration[];
  token_selection?: AwsVerifiedpermissionsIdentitySourceArgsConfigurationOpenIdConnectConfigurationTokenSelection[];
}

export interface AwsVerifiedpermissionsIdentitySourceArgsConfiguration {
  cognito_user_pool_configuration?: AwsVerifiedpermissionsIdentitySourceArgsConfigurationCognitoUserPoolConfiguration[];
  open_id_connect_configuration?: AwsVerifiedpermissionsIdentitySourceArgsConfigurationOpenIdConnectConfiguration[];
}

export interface AwsVerifiedpermissionsIdentitySourceArgs {
  policy_store_id: string;
  configuration?: AwsVerifiedpermissionsIdentitySourceArgsConfiguration[];
}

export class aws_verifiedpermissions_identity_source extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsVerifiedpermissionsIdentitySourceArgs) {
    const meta = {configuration:{isBlock:true,cognito_user_pool_configuration:{isBlock:true,group_configuration:{isBlock:true}},open_id_connect_configuration:{isBlock:true,group_configuration:{isBlock:true},token_selection:{isBlock:true,access_token_only:{isBlock:true},identity_token_only:{isBlock:true}}}}};
    super(terraformConfig, "resource", args, meta, "aws_verifiedpermissions_identity_source", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_store_id(): string {
    return `${this.resourceType}.${this.resourceName}.policy_store_id`;
  }

  get principal_entity_type(): string {
    return `${this.resourceType}.${this.resourceName}.principal_entity_type`;
  }
}
