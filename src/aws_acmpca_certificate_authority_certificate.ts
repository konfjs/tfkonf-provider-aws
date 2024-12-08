import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAcmpcaCertificateAuthorityCertificateArgs {
  certificate: string;
  certificate_authority_arn: string;
  certificate_chain?: string;
}

export class aws_acmpca_certificate_authority_certificate extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAcmpcaCertificateAuthorityCertificateArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_acmpca_certificate_authority_certificate", resourceName);
  }

  get certificate(): string {
    return `${this.resourceType}.${this.resourceName}.certificate`;
  }

  get certificate_authority_arn(): string {
    return `${this.resourceType}.${this.resourceName}.certificate_authority_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
