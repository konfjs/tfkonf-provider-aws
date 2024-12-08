import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEksIdentityProviderConfigArgsOidc {
  client_id: string;
  groups_claim?: string;
  groups_prefix?: string;
  identity_provider_config_name: string;
  issuer_url: string;
  required_claims?: { [key: string]: string };
  username_claim?: string;
  username_prefix?: string;
}

export interface AwsEksIdentityProviderConfigArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsEksIdentityProviderConfigArgs {
  cluster_name: string;
  tags?: { [key: string]: string };
  oidc: AwsEksIdentityProviderConfigArgsOidc;
  timeouts?: AwsEksIdentityProviderConfigArgsTimeouts;
}

export class aws_eks_identity_provider_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEksIdentityProviderConfigArgs) {
    const meta = {oidc:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_eks_identity_provider_config", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get cluster_name(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
