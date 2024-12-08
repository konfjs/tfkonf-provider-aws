import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsAcmCertificateArgs {
  key_types?: string[];
  most_recent?: boolean;
  statuses?: string[];
  types?: string[];
}

export class data_aws_acm_certificate extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsAcmCertificateArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_acm_certificate", resourceName);
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

  get domain(): string {
    return `data.${this.resourceType}.${this.resourceName}.domain`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
