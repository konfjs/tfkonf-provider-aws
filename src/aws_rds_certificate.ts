import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRdsCertificateArgs {
  certificate_identifier: string;
}

export class aws_rds_certificate extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRdsCertificateArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_rds_certificate", resourceName);
  }

  get certificate_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.certificate_identifier`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
