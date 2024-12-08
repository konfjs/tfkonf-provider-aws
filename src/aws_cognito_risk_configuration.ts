import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfigurationActionsHighAction {
  event_action: string;
  notify: boolean;
}

export interface AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfigurationActionsLowAction {
  event_action: string;
  notify: boolean;
}

export interface AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfigurationActionsMediumAction {
  event_action: string;
  notify: boolean;
}

export interface AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfigurationActions {
  high_action?: AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfigurationActionsHighAction;
  low_action?: AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfigurationActionsLowAction;
  medium_action?: AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfigurationActionsMediumAction;
}

export interface AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail {
  html_body: string;
  subject: string;
  text_body: string;
}

export interface AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail {
  html_body: string;
  subject: string;
  text_body: string;
}

export interface AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail {
  html_body: string;
  subject: string;
  text_body: string;
}

export interface AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfigurationNotifyConfiguration {
  from?: string;
  reply_to?: string;
  source_arn: string;
  block_email?: AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail;
  mfa_email?: AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail;
  no_action_email?: AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail;
}

export interface AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfiguration {
  actions: AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfigurationActions;
  notify_configuration: AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfigurationNotifyConfiguration;
}

export interface AwsCognitoRiskConfigurationArgsCompromisedCredentialsRiskConfigurationActions {
  event_action: string;
}

export interface AwsCognitoRiskConfigurationArgsCompromisedCredentialsRiskConfiguration {
  actions: AwsCognitoRiskConfigurationArgsCompromisedCredentialsRiskConfigurationActions;
}

export interface AwsCognitoRiskConfigurationArgsRiskExceptionConfiguration {
  blocked_ip_range_list?: string[];
  skipped_ip_range_list?: string[];
}

export interface AwsCognitoRiskConfigurationArgs {
  client_id?: string;
  user_pool_id: string;
  account_takeover_risk_configuration?: AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfiguration;
  compromised_credentials_risk_configuration?: AwsCognitoRiskConfigurationArgsCompromisedCredentialsRiskConfiguration;
  risk_exception_configuration?: AwsCognitoRiskConfigurationArgsRiskExceptionConfiguration;
}

export class aws_cognito_risk_configuration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCognitoRiskConfigurationArgs) {
    const meta = {account_takeover_risk_configuration:{isBlock:true,actions:{isBlock:true,high_action:{isBlock:true},low_action:{isBlock:true},medium_action:{isBlock:true}},notify_configuration:{isBlock:true,block_email:{isBlock:true},mfa_email:{isBlock:true},no_action_email:{isBlock:true}}},compromised_credentials_risk_configuration:{isBlock:true,actions:{isBlock:true}},risk_exception_configuration:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_cognito_risk_configuration", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get user_pool_id(): string {
    return `${this.resourceType}.${this.resourceName}.user_pool_id`;
  }
}
