import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsAcmpcaCertificateArgs {
  arn: string;
  certificate_authority_arn: string;
}

export class data_aws_acmpca_certificate extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsAcmpcaCertificateArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_acmpca_certificate", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get certificate(): string {
    return `data.${this.resourceType}.${this.resourceName}.certificate`;
  }

  get certificate_authority_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.certificate_authority_arn`;
  }

  get certificate_chain(): string {
    return `data.${this.resourceType}.${this.resourceName}.certificate_chain`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
