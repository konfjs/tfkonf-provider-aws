import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApprunnerCustomDomainAssociationArgs {
  domain_name: string;
  enable_www_subdomain?: boolean;
  service_arn: string;
}

export class aws_apprunner_custom_domain_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsApprunnerCustomDomainAssociationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_apprunner_custom_domain_association", resourceName);
  }

  get certificate_validation_records(): string {
    return `${this.resourceType}.${this.resourceName}.certificate_validation_records`;
  }

  get dns_target(): string {
    return `${this.resourceType}.${this.resourceName}.dns_target`;
  }

  get domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get service_arn(): string {
    return `${this.resourceType}.${this.resourceName}.service_arn`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }
}
