import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWorklinkWebsiteCertificateAuthorityAssociationArgs {
  certificate: string;
  display_name?: string;
  fleet_arn: string;
}

export class aws_worklink_website_certificate_authority_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsWorklinkWebsiteCertificateAuthorityAssociationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_worklink_website_certificate_authority_association", resourceName);
  }

  get certificate(): string {
    return `${this.resourceType}.${this.resourceName}.certificate`;
  }

  get fleet_arn(): string {
    return `${this.resourceType}.${this.resourceName}.fleet_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get website_ca_id(): string {
    return `${this.resourceType}.${this.resourceName}.website_ca_id`;
  }
}
