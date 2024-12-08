import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAmplifyDomainAssociationArgsCertificateSettings {
  custom_certificate_arn?: string;
  type: string;
}

export interface AwsAmplifyDomainAssociationArgsSubDomain {
  branch_name: string;
  prefix: string;
}

export interface AwsAmplifyDomainAssociationArgs {
  app_id: string;
  domain_name: string;
  enable_auto_sub_domain?: boolean;
  wait_for_verification?: boolean;
  certificate_settings?: AwsAmplifyDomainAssociationArgsCertificateSettings;
  sub_domain: AwsAmplifyDomainAssociationArgsSubDomain[];
}

export class aws_amplify_domain_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAmplifyDomainAssociationArgs) {
    const meta = {certificate_settings:{isBlock:true},sub_domain:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_amplify_domain_association", resourceName);
  }

  get app_id(): string {
    return `${this.resourceType}.${this.resourceName}.app_id`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get certificate_verification_dns_record(): string {
    return `${this.resourceType}.${this.resourceName}.certificate_verification_dns_record`;
  }

  get domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
