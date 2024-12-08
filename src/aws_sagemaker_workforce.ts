import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSagemakerWorkforceArgsCognitoConfig {
  client_id: string;
  user_pool: string;
}

export interface AwsSagemakerWorkforceArgsOidcConfig {
  authentication_request_extra_params?: { [key: string]: string };
  authorization_endpoint: string;
  client_id: string;
  client_secret: string;
  issuer: string;
  jwks_uri: string;
  logout_endpoint: string;
  scope?: string;
  token_endpoint: string;
  user_info_endpoint: string;
}

export interface AwsSagemakerWorkforceArgsSourceIpConfig {
  cidrs: string[];
}

export interface AwsSagemakerWorkforceArgsWorkforceVpcConfig {
  security_group_ids?: string[];
  subnets?: string[];
  vpc_id?: string;
}

export interface AwsSagemakerWorkforceArgs {
  workforce_name: string;
  cognito_config?: AwsSagemakerWorkforceArgsCognitoConfig;
  oidc_config?: AwsSagemakerWorkforceArgsOidcConfig;
  source_ip_config?: AwsSagemakerWorkforceArgsSourceIpConfig;
  workforce_vpc_config?: AwsSagemakerWorkforceArgsWorkforceVpcConfig;
}

export class aws_sagemaker_workforce extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSagemakerWorkforceArgs) {
    const meta = {cognito_config:{isBlock:true},oidc_config:{isBlock:true},source_ip_config:{isBlock:true},workforce_vpc_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_sagemaker_workforce", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get subdomain(): string {
    return `${this.resourceType}.${this.resourceName}.subdomain`;
  }

  get workforce_name(): string {
    return `${this.resourceType}.${this.resourceName}.workforce_name`;
  }
}
