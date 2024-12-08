import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIotDomainConfigurationArgsAuthorizerConfig {
  allow_authorizer_override?: boolean;
  default_authorizer_name?: string;
}

export interface AwsIotDomainConfigurationArgsTlsConfig {
}

export interface AwsIotDomainConfigurationArgs {
  domain_name?: string;
  name: string;
  server_certificate_arns?: string[];
  service_type?: string;
  status?: string;
  tags?: { [key: string]: string };
  validation_certificate_arn?: string;
  authorizer_config?: AwsIotDomainConfigurationArgsAuthorizerConfig;
  tls_config?: AwsIotDomainConfigurationArgsTlsConfig;
}

export class aws_iot_domain_configuration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsIotDomainConfigurationArgs) {
    const meta = {authorizer_config:{isBlock:true},tls_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_iot_domain_configuration", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get domain_type(): string {
    return `${this.resourceType}.${this.resourceName}.domain_type`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
