import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApigatewayv2DomainNameArgsDomainNameConfiguration {
  certificate_arn: string;
  endpoint_type: string;
  security_policy: string;
}

export interface AwsApigatewayv2DomainNameArgsMutualTlsAuthentication {
  truststore_uri: string;
  truststore_version?: string;
}

export interface AwsApigatewayv2DomainNameArgsTimeouts {
  create?: string;
  update?: string;
}

export interface AwsApigatewayv2DomainNameArgs {
  domain_name: string;
  tags?: { [key: string]: string };
  domain_name_configuration: AwsApigatewayv2DomainNameArgsDomainNameConfiguration;
  mutual_tls_authentication?: AwsApigatewayv2DomainNameArgsMutualTlsAuthentication;
  timeouts?: AwsApigatewayv2DomainNameArgsTimeouts;
}

export class aws_apigatewayv2_domain_name extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsApigatewayv2DomainNameArgs) {
    const meta = {domain_name_configuration:{isBlock:true},mutual_tls_authentication:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_apigatewayv2_domain_name", resourceName);
  }

  get api_mapping_selection_expression(): string {
    return `${this.resourceType}.${this.resourceName}.api_mapping_selection_expression`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
