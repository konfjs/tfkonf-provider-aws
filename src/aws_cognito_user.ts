import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCognitoUserArgs {
  attributes?: { [key: string]: string };
  client_metadata?: { [key: string]: string };
  desired_delivery_mediums?: string[];
  enabled?: boolean;
  force_alias_creation?: boolean;
  message_action?: string;
  password?: string;
  temporary_password?: string;
  user_pool_id: string;
  username: string;
  validation_data?: { [key: string]: string };
}

export class aws_cognito_user extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCognitoUserArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_cognito_user", resourceName);
  }

  get creation_date(): string {
    return `${this.resourceType}.${this.resourceName}.creation_date`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_modified_date(): string {
    return `${this.resourceType}.${this.resourceName}.last_modified_date`;
  }

  get mfa_setting_list(): string {
    return `${this.resourceType}.${this.resourceName}.mfa_setting_list`;
  }

  get preferred_mfa_setting(): string {
    return `${this.resourceType}.${this.resourceName}.preferred_mfa_setting`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get sub(): string {
    return `${this.resourceType}.${this.resourceName}.sub`;
  }

  get user_pool_id(): string {
    return `${this.resourceType}.${this.resourceName}.user_pool_id`;
  }

  get username(): string {
    return `${this.resourceType}.${this.resourceName}.username`;
  }
}
