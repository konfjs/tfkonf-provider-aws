import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAcmpcaCertificateArgsValidity {
  type: string;
  value: string;
}

export interface AwsAcmpcaCertificateArgs {
  api_passthrough?: string;
  certificate_authority_arn: string;
  certificate_signing_request: string;
  signing_algorithm: string;
  template_arn?: string;
  validity: AwsAcmpcaCertificateArgsValidity;
}

export class aws_acmpca_certificate extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAcmpcaCertificateArgs) {
    const meta = {validity:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_acmpca_certificate", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get certificate(): string {
    return `${this.resourceType}.${this.resourceName}.certificate`;
  }

  get certificate_authority_arn(): string {
    return `${this.resourceType}.${this.resourceName}.certificate_authority_arn`;
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

  get signing_algorithm(): string {
    return `${this.resourceType}.${this.resourceName}.signing_algorithm`;
  }
}
