import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCognitoUserPoolUiCustomizationArgs {
  client_id?: string;
  css?: string;
  image_file?: string;
  user_pool_id: string;
}

export class aws_cognito_user_pool_ui_customization extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCognitoUserPoolUiCustomizationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_cognito_user_pool_ui_customization", resourceName);
  }

  get creation_date(): string {
    return `${this.resourceType}.${this.resourceName}.creation_date`;
  }

  get css_version(): string {
    return `${this.resourceType}.${this.resourceName}.css_version`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get image_url(): string {
    return `${this.resourceType}.${this.resourceName}.image_url`;
  }

  get last_modified_date(): string {
    return `${this.resourceType}.${this.resourceName}.last_modified_date`;
  }

  get user_pool_id(): string {
    return `${this.resourceType}.${this.resourceName}.user_pool_id`;
  }
}
