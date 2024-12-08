import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCognitoUserPoolArgsAccountRecoverySettingRecoveryMechanism {
  name: string;
  priority: number;
}

export interface AwsCognitoUserPoolArgsAccountRecoverySetting {
  recovery_mechanism?: AwsCognitoUserPoolArgsAccountRecoverySettingRecoveryMechanism[];
}

export interface AwsCognitoUserPoolArgsAdminCreateUserConfigInviteMessageTemplate {
  email_message?: string;
  email_subject?: string;
  sms_message?: string;
}

export interface AwsCognitoUserPoolArgsAdminCreateUserConfig {
  allow_admin_create_user_only?: boolean;
  invite_message_template?: AwsCognitoUserPoolArgsAdminCreateUserConfigInviteMessageTemplate;
}

export interface AwsCognitoUserPoolArgsDeviceConfiguration {
  challenge_required_on_new_device?: boolean;
  device_only_remembered_on_user_prompt?: boolean;
}

export interface AwsCognitoUserPoolArgsEmailConfiguration {
  configuration_set?: string;
  email_sending_account?: string;
  from_email_address?: string;
  reply_to_email_address?: string;
  source_arn?: string;
}

export interface AwsCognitoUserPoolArgsLambdaConfigCustomEmailSender {
  lambda_arn: string;
  lambda_version: string;
}

export interface AwsCognitoUserPoolArgsLambdaConfigCustomSmsSender {
  lambda_arn: string;
  lambda_version: string;
}

export interface AwsCognitoUserPoolArgsLambdaConfigPreTokenGenerationConfig {
  lambda_arn: string;
  lambda_version: string;
}

export interface AwsCognitoUserPoolArgsLambdaConfig {
  create_auth_challenge?: string;
  custom_message?: string;
  define_auth_challenge?: string;
  kms_key_id?: string;
  post_authentication?: string;
  post_confirmation?: string;
  pre_authentication?: string;
  pre_sign_up?: string;
  user_migration?: string;
  verify_auth_challenge_response?: string;
  custom_email_sender?: AwsCognitoUserPoolArgsLambdaConfigCustomEmailSender;
  custom_sms_sender?: AwsCognitoUserPoolArgsLambdaConfigCustomSmsSender;
  pre_token_generation_config?: AwsCognitoUserPoolArgsLambdaConfigPreTokenGenerationConfig;
}

export interface AwsCognitoUserPoolArgsPasswordPolicy {
  minimum_length?: number;
  password_history_size?: number;
  require_lowercase?: boolean;
  require_numbers?: boolean;
  require_symbols?: boolean;
  require_uppercase?: boolean;
}

export interface AwsCognitoUserPoolArgsSchemaNumberAttributeConstraints {
  max_value?: string;
  min_value?: string;
}

export interface AwsCognitoUserPoolArgsSchemaStringAttributeConstraints {
  max_length?: string;
  min_length?: string;
}

export interface AwsCognitoUserPoolArgsSchema {
  attribute_data_type: string;
  developer_only_attribute?: boolean;
  mutable?: boolean;
  name: string;
  required?: boolean;
  number_attribute_constraints?: AwsCognitoUserPoolArgsSchemaNumberAttributeConstraints;
  string_attribute_constraints?: AwsCognitoUserPoolArgsSchemaStringAttributeConstraints;
}

export interface AwsCognitoUserPoolArgsSmsConfiguration {
  external_id: string;
  sns_caller_arn: string;
}

export interface AwsCognitoUserPoolArgsSoftwareTokenMfaConfiguration {
  enabled: boolean;
}

export interface AwsCognitoUserPoolArgsUserAttributeUpdateSettings {
  attributes_require_verification_before_update: string[];
}

export interface AwsCognitoUserPoolArgsUserPoolAddOns {
  advanced_security_mode: string;
}

export interface AwsCognitoUserPoolArgsUsernameConfiguration {
  case_sensitive: boolean;
}

export interface AwsCognitoUserPoolArgsVerificationMessageTemplate {
  default_email_option?: string;
}

export interface AwsCognitoUserPoolArgs {
  alias_attributes?: string[];
  auto_verified_attributes?: string[];
  deletion_protection?: string;
  mfa_configuration?: string;
  name: string;
  sms_authentication_message?: string;
  tags?: { [key: string]: string };
  username_attributes?: string[];
  account_recovery_setting?: AwsCognitoUserPoolArgsAccountRecoverySetting;
  admin_create_user_config?: AwsCognitoUserPoolArgsAdminCreateUserConfig;
  device_configuration?: AwsCognitoUserPoolArgsDeviceConfiguration;
  email_configuration?: AwsCognitoUserPoolArgsEmailConfiguration;
  lambda_config?: AwsCognitoUserPoolArgsLambdaConfig;
  password_policy?: AwsCognitoUserPoolArgsPasswordPolicy;
  schema?: AwsCognitoUserPoolArgsSchema[];
  sms_configuration?: AwsCognitoUserPoolArgsSmsConfiguration;
  software_token_mfa_configuration?: AwsCognitoUserPoolArgsSoftwareTokenMfaConfiguration;
  user_attribute_update_settings?: AwsCognitoUserPoolArgsUserAttributeUpdateSettings;
  user_pool_add_ons?: AwsCognitoUserPoolArgsUserPoolAddOns;
  username_configuration?: AwsCognitoUserPoolArgsUsernameConfiguration;
  verification_message_template?: AwsCognitoUserPoolArgsVerificationMessageTemplate;
}

export class aws_cognito_user_pool extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCognitoUserPoolArgs) {
    const meta = {account_recovery_setting:{isBlock:true,recovery_mechanism:{isBlock:true}},admin_create_user_config:{isBlock:true,invite_message_template:{isBlock:true}},device_configuration:{isBlock:true},email_configuration:{isBlock:true},lambda_config:{isBlock:true,custom_email_sender:{isBlock:true},custom_sms_sender:{isBlock:true},pre_token_generation_config:{isBlock:true}},password_policy:{isBlock:true},schema:{isBlock:true,number_attribute_constraints:{isBlock:true},string_attribute_constraints:{isBlock:true}},sms_configuration:{isBlock:true},software_token_mfa_configuration:{isBlock:true},user_attribute_update_settings:{isBlock:true},user_pool_add_ons:{isBlock:true},username_configuration:{isBlock:true},verification_message_template:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_cognito_user_pool", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get creation_date(): string {
    return `${this.resourceType}.${this.resourceName}.creation_date`;
  }

  get custom_domain(): string {
    return `${this.resourceType}.${this.resourceName}.custom_domain`;
  }

  get domain(): string {
    return `${this.resourceType}.${this.resourceName}.domain`;
  }

  get email_verification_message(): string {
    return `${this.resourceType}.${this.resourceName}.email_verification_message`;
  }

  get email_verification_subject(): string {
    return `${this.resourceType}.${this.resourceName}.email_verification_subject`;
  }

  get endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get estimated_number_of_users(): string {
    return `${this.resourceType}.${this.resourceName}.estimated_number_of_users`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_modified_date(): string {
    return `${this.resourceType}.${this.resourceName}.last_modified_date`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get sms_verification_message(): string {
    return `${this.resourceType}.${this.resourceName}.sms_verification_message`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
