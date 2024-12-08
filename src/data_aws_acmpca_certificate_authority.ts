import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsAcmpcaCertificateAuthorityArgs {
  arn: string;
}

export class data_aws_acmpca_certificate_authority extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsAcmpcaCertificateAuthorityArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_acmpca_certificate_authority", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get certificate(): string {
    return `data.${this.resourceType}.${this.resourceName}.certificate`;
  }

  get certificate_chain(): string {
    return `data.${this.resourceType}.${this.resourceName}.certificate_chain`;
  }

  get certificate_signing_request(): string {
    return `data.${this.resourceType}.${this.resourceName}.certificate_signing_request`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get key_storage_security_standard(): string {
    return `data.${this.resourceType}.${this.resourceName}.key_storage_security_standard`;
  }

  get not_after(): string {
    return `data.${this.resourceType}.${this.resourceName}.not_after`;
  }

  get not_before(): string {
    return `data.${this.resourceType}.${this.resourceName}.not_before`;
  }

  get revocation_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.revocation_configuration`;
  }

  get serial(): string {
    return `data.${this.resourceType}.${this.resourceName}.serial`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }

  get usage_mode(): string {
    return `data.${this.resourceType}.${this.resourceName}.usage_mode`;
  }
}
