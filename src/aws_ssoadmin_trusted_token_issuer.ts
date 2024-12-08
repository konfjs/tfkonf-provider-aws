import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsoadminTrustedTokenIssuerArgsTrustedTokenIssuerConfigurationOidcJwtConfiguration {
  claim_attribute_path: string;
  identity_store_attribute_path: string;
  issuer_url: string;
  jwks_retrieval_option: string;
}

export interface AwsSsoadminTrustedTokenIssuerArgsTrustedTokenIssuerConfiguration {
  oidc_jwt_configuration?: AwsSsoadminTrustedTokenIssuerArgsTrustedTokenIssuerConfigurationOidcJwtConfiguration[];
}

export interface AwsSsoadminTrustedTokenIssuerArgs {
  client_token?: string;
  instance_arn: string;
  name: string;
  tags?: { [key: string]: string };
  trusted_token_issuer_type: string;
  trusted_token_issuer_configuration?: AwsSsoadminTrustedTokenIssuerArgsTrustedTokenIssuerConfiguration[];
}

export class aws_ssoadmin_trusted_token_issuer extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSsoadminTrustedTokenIssuerArgs) {
    const meta = {trusted_token_issuer_configuration:{isBlock:true,oidc_jwt_configuration:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_ssoadmin_trusted_token_issuer", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_arn(): string {
    return `${this.resourceType}.${this.resourceName}.instance_arn`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get trusted_token_issuer_type(): string {
    return `${this.resourceType}.${this.resourceName}.trusted_token_issuer_type`;
  }
}
