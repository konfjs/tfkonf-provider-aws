import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApiGatewayDomainNameArgsEndpointConfiguration {
  types: string[];
}

export interface AwsApiGatewayDomainNameArgsMutualTlsAuthentication {
  truststore_uri: string;
  truststore_version?: string;
}

export interface AwsApiGatewayDomainNameArgs {
  certificate_arn?: string;
  certificate_body?: string;
  certificate_chain?: string;
  certificate_name?: string;
  certificate_private_key?: string;
  domain_name: string;
  regional_certificate_arn?: string;
  regional_certificate_name?: string;
  tags?: { [key: string]: string };
  endpoint_configuration?: AwsApiGatewayDomainNameArgsEndpointConfiguration;
  mutual_tls_authentication?: AwsApiGatewayDomainNameArgsMutualTlsAuthentication;
}

export class aws_api_gateway_domain_name extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsApiGatewayDomainNameArgs) {
    const meta = {endpoint_configuration:{isBlock:true},mutual_tls_authentication:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_api_gateway_domain_name", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get certificate_upload_date(): string {
    return `${this.resourceType}.${this.resourceName}.certificate_upload_date`;
  }

  get cloudfront_domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.cloudfront_domain_name`;
  }

  get cloudfront_zone_id(): string {
    return `${this.resourceType}.${this.resourceName}.cloudfront_zone_id`;
  }

  get domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ownership_verification_certificate_arn(): string {
    return `${this.resourceType}.${this.resourceName}.ownership_verification_certificate_arn`;
  }

  get regional_domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.regional_domain_name`;
  }

  get regional_zone_id(): string {
    return `${this.resourceType}.${this.resourceName}.regional_zone_id`;
  }

  get security_policy(): string {
    return `${this.resourceType}.${this.resourceName}.security_policy`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
