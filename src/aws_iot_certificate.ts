import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIotCertificateArgs {
  active: boolean;
  ca_pem?: string;
  csr?: string;
}

export class aws_iot_certificate extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsIotCertificateArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iot_certificate", resourceName);
  }

  get active(): string {
    return `${this.resourceType}.${this.resourceName}.active`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get ca_certificate_id(): string {
    return `${this.resourceType}.${this.resourceName}.ca_certificate_id`;
  }

  get certificate_pem(): string {
    return `${this.resourceType}.${this.resourceName}.certificate_pem`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get private_key(): string {
    return `${this.resourceType}.${this.resourceName}.private_key`;
  }

  get public_key(): string {
    return `${this.resourceType}.${this.resourceName}.public_key`;
  }
}
