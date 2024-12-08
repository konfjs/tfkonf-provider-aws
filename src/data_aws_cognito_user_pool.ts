import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCognitoUserPoolArgs {
  user_pool_id: string;
}

export class data_aws_cognito_user_pool extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsCognitoUserPoolArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_cognito_user_pool", resourceName);
  }

  get account_recovery_setting(): string {
    return `data.${this.resourceType}.${this.resourceName}.account_recovery_setting`;
  }

  get admin_create_user_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.admin_create_user_config`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get auto_verified_attributes(): string {
    return `data.${this.resourceType}.${this.resourceName}.auto_verified_attributes`;
  }

  get creation_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.creation_date`;
  }

  get custom_domain(): string {
    return `data.${this.resourceType}.${this.resourceName}.custom_domain`;
  }

  get deletion_protection(): string {
    return `data.${this.resourceType}.${this.resourceName}.deletion_protection`;
  }

  get device_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.device_configuration`;
  }

  get domain(): string {
    return `data.${this.resourceType}.${this.resourceName}.domain`;
  }

  get email_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.email_configuration`;
  }

  get estimated_number_of_users(): string {
    return `data.${this.resourceType}.${this.resourceName}.estimated_number_of_users`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get lambda_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.lambda_config`;
  }

  get last_modified_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_modified_date`;
  }

  get mfa_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.mfa_configuration`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get schema_attributes(): string {
    return `data.${this.resourceType}.${this.resourceName}.schema_attributes`;
  }

  get sms_authentication_message(): string {
    return `data.${this.resourceType}.${this.resourceName}.sms_authentication_message`;
  }

  get sms_configuration_failure(): string {
    return `data.${this.resourceType}.${this.resourceName}.sms_configuration_failure`;
  }

  get sms_verification_message(): string {
    return `data.${this.resourceType}.${this.resourceName}.sms_verification_message`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get user_pool_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_pool_id`;
  }

  get user_pool_tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_pool_tags`;
  }

  get username_attributes(): string {
    return `data.${this.resourceType}.${this.resourceName}.username_attributes`;
  }
}
