import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRedshiftserverlessCustomDomainAssociationArgs {
  custom_domain_certificate_arn: string;
  custom_domain_name: string;
  workgroup_name: string;
}

export class aws_redshiftserverless_custom_domain_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRedshiftserverlessCustomDomainAssociationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_redshiftserverless_custom_domain_association", resourceName);
  }

  get custom_domain_certificate_arn(): string {
    return `${this.resourceType}.${this.resourceName}.custom_domain_certificate_arn`;
  }

  get custom_domain_certificate_expiry_time(): string {
    return `${this.resourceType}.${this.resourceName}.custom_domain_certificate_expiry_time`;
  }

  get custom_domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.custom_domain_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get workgroup_name(): string {
    return `${this.resourceType}.${this.resourceName}.workgroup_name`;
  }
}
