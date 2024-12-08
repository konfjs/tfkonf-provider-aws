import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsApiGatewayDomainNameArgs {
  domain_name: string;
}

export class data_aws_api_gateway_domain_name extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsApiGatewayDomainNameArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_api_gateway_domain_name", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get certificate_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.certificate_arn`;
  }

  get certificate_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.certificate_name`;
  }

  get certificate_upload_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.certificate_upload_date`;
  }

  get cloudfront_domain_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.cloudfront_domain_name`;
  }

  get cloudfront_zone_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.cloudfront_zone_id`;
  }

  get domain_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get endpoint_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.endpoint_configuration`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get regional_certificate_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.regional_certificate_arn`;
  }

  get regional_certificate_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.regional_certificate_name`;
  }

  get regional_domain_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.regional_domain_name`;
  }

  get regional_zone_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.regional_zone_id`;
  }

  get security_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_policy`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
