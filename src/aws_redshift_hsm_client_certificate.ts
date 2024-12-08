import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRedshiftHsmClientCertificateArgs {
  hsm_client_certificate_identifier: string;
  tags?: { [key: string]: string };
}

export class aws_redshift_hsm_client_certificate extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRedshiftHsmClientCertificateArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_redshift_hsm_client_certificate", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get hsm_client_certificate_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.hsm_client_certificate_identifier`;
  }

  get hsm_client_certificate_public_key(): string {
    return `${this.resourceType}.${this.resourceName}.hsm_client_certificate_public_key`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
