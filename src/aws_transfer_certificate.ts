import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsTransferCertificateArgs {
  certificate: string;
  certificate_chain?: string;
  description?: string;
  private_key?: string;
  tags?: { [key: string]: string };
  usage: string;
}

export class aws_transfer_certificate extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsTransferCertificateArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_transfer_certificate", resourceName);
  }

  get active_date(): string {
    return `${this.resourceType}.${this.resourceName}.active_date`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get certificate(): string {
    return `${this.resourceType}.${this.resourceName}.certificate`;
  }

  get certificate_id(): string {
    return `${this.resourceType}.${this.resourceName}.certificate_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get inactive_date(): string {
    return `${this.resourceType}.${this.resourceName}.inactive_date`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get usage(): string {
    return `${this.resourceType}.${this.resourceName}.usage`;
  }
}
