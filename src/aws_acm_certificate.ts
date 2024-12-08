import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAcmCertificateArgsOptions {
  certificate_transparency_logging_preference?: string;
}

export interface AwsAcmCertificateArgsValidationOption {
  domain_name: string;
  validation_domain: string;
}

export interface AwsAcmCertificateArgs {
  certificate_authority_arn?: string;
  certificate_body?: string;
  certificate_chain?: string;
  early_renewal_duration?: string;
  private_key?: string;
  tags?: { [key: string]: string };
  options?: AwsAcmCertificateArgsOptions;
  validation_option?: AwsAcmCertificateArgsValidationOption[];
}

export class aws_acm_certificate extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAcmCertificateArgs) {
    const meta = {options:{isBlock:true},validation_option:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_acm_certificate", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get domain_validation_options(): string {
    return `${this.resourceType}.${this.resourceName}.domain_validation_options`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key_algorithm(): string {
    return `${this.resourceType}.${this.resourceName}.key_algorithm`;
  }

  get not_after(): string {
    return `${this.resourceType}.${this.resourceName}.not_after`;
  }

  get not_before(): string {
    return `${this.resourceType}.${this.resourceName}.not_before`;
  }

  get pending_renewal(): string {
    return `${this.resourceType}.${this.resourceName}.pending_renewal`;
  }

  get renewal_eligibility(): string {
    return `${this.resourceType}.${this.resourceName}.renewal_eligibility`;
  }

  get renewal_summary(): string {
    return `${this.resourceType}.${this.resourceName}.renewal_summary`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get subject_alternative_names(): string {
    return `${this.resourceType}.${this.resourceName}.subject_alternative_names`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }

  get validation_emails(): string {
    return `${this.resourceType}.${this.resourceName}.validation_emails`;
  }

  get validation_method(): string {
    return `${this.resourceType}.${this.resourceName}.validation_method`;
  }
}
