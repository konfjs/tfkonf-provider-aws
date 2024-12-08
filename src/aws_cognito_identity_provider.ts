import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCognitoIdentityProviderArgs {
  idp_identifiers?: string[];
  provider_details: { [key: string]: string };
  provider_name: string;
  provider_type: string;
  user_pool_id: string;
}

export class aws_cognito_identity_provider extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCognitoIdentityProviderArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_cognito_identity_provider", resourceName);
  }

  get attribute_mapping(): string {
    return `${this.resourceType}.${this.resourceName}.attribute_mapping`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get provider_details(): string {
    return `${this.resourceType}.${this.resourceName}.provider_details`;
  }

  get provider_name(): string {
    return `${this.resourceType}.${this.resourceName}.provider_name`;
  }

  get provider_type(): string {
    return `${this.resourceType}.${this.resourceName}.provider_type`;
  }

  get user_pool_id(): string {
    return `${this.resourceType}.${this.resourceName}.user_pool_id`;
  }
}
