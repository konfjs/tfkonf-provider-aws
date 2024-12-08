import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVerifiedaccessTrustProviderArgsDeviceOptions {
  tenant_id?: string;
}

export interface AwsVerifiedaccessTrustProviderArgsOidcOptions {
  authorization_endpoint?: string;
  client_id?: string;
  client_secret: string;
  issuer?: string;
  scope?: string;
  token_endpoint?: string;
  user_info_endpoint?: string;
}

export interface AwsVerifiedaccessTrustProviderArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsVerifiedaccessTrustProviderArgs {
  description?: string;
  device_trust_provider_type?: string;
  policy_reference_name: string;
  tags?: { [key: string]: string };
  trust_provider_type: string;
  user_trust_provider_type?: string;
  device_options?: AwsVerifiedaccessTrustProviderArgsDeviceOptions;
  oidc_options?: AwsVerifiedaccessTrustProviderArgsOidcOptions;
  timeouts?: AwsVerifiedaccessTrustProviderArgsTimeouts;
}

export class aws_verifiedaccess_trust_provider extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsVerifiedaccessTrustProviderArgs) {
    const meta = {device_options:{isBlock:true},oidc_options:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_verifiedaccess_trust_provider", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_reference_name(): string {
    return `${this.resourceType}.${this.resourceName}.policy_reference_name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get trust_provider_type(): string {
    return `${this.resourceType}.${this.resourceName}.trust_provider_type`;
  }
}
