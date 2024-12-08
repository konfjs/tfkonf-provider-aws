import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAcmpcaCertificateAuthorityArgsCertificateAuthorityConfigurationSubject {
  common_name?: string;
  country?: string;
  distinguished_name_qualifier?: string;
  generation_qualifier?: string;
  given_name?: string;
  initials?: string;
  locality?: string;
  organization?: string;
  organizational_unit?: string;
  pseudonym?: string;
  state?: string;
  surname?: string;
  title?: string;
}

export interface AwsAcmpcaCertificateAuthorityArgsCertificateAuthorityConfiguration {
  key_algorithm: string;
  signing_algorithm: string;
  subject: AwsAcmpcaCertificateAuthorityArgsCertificateAuthorityConfigurationSubject;
}

export interface AwsAcmpcaCertificateAuthorityArgsRevocationConfigurationCrlConfiguration {
  custom_cname?: string;
  enabled?: boolean;
  expiration_in_days?: number;
  s3_bucket_name?: string;
}

export interface AwsAcmpcaCertificateAuthorityArgsRevocationConfigurationOcspConfiguration {
  enabled: boolean;
  ocsp_custom_cname?: string;
}

export interface AwsAcmpcaCertificateAuthorityArgsRevocationConfiguration {
  crl_configuration?: AwsAcmpcaCertificateAuthorityArgsRevocationConfigurationCrlConfiguration;
  ocsp_configuration?: AwsAcmpcaCertificateAuthorityArgsRevocationConfigurationOcspConfiguration;
}

export interface AwsAcmpcaCertificateAuthorityArgsTimeouts {
  create?: string;
}

export interface AwsAcmpcaCertificateAuthorityArgs {
  enabled?: boolean;
  permanent_deletion_time_in_days?: number;
  tags?: { [key: string]: string };
  type?: string;
  certificate_authority_configuration: AwsAcmpcaCertificateAuthorityArgsCertificateAuthorityConfiguration;
  revocation_configuration?: AwsAcmpcaCertificateAuthorityArgsRevocationConfiguration;
  timeouts?: AwsAcmpcaCertificateAuthorityArgsTimeouts;
}

export class aws_acmpca_certificate_authority extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAcmpcaCertificateAuthorityArgs) {
    const meta = {certificate_authority_configuration:{isBlock:true,subject:{isBlock:true}},revocation_configuration:{isBlock:true,crl_configuration:{isBlock:true},ocsp_configuration:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_acmpca_certificate_authority", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get certificate(): string {
    return `${this.resourceType}.${this.resourceName}.certificate`;
  }

  get certificate_chain(): string {
    return `${this.resourceType}.${this.resourceName}.certificate_chain`;
  }

  get certificate_signing_request(): string {
    return `${this.resourceType}.${this.resourceName}.certificate_signing_request`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key_storage_security_standard(): string {
    return `${this.resourceType}.${this.resourceName}.key_storage_security_standard`;
  }

  get not_after(): string {
    return `${this.resourceType}.${this.resourceName}.not_after`;
  }

  get not_before(): string {
    return `${this.resourceType}.${this.resourceName}.not_before`;
  }

  get serial(): string {
    return `${this.resourceType}.${this.resourceName}.serial`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get usage_mode(): string {
    return `${this.resourceType}.${this.resourceName}.usage_mode`;
  }
}
