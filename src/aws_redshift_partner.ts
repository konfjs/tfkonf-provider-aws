import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRedshiftPartnerArgs {
  account_id: string;
  cluster_identifier: string;
  database_name: string;
  partner_name: string;
}

export class aws_redshift_partner extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRedshiftPartnerArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_redshift_partner", resourceName);
  }

  get account_id(): string {
    return `${this.resourceType}.${this.resourceName}.account_id`;
  }

  get cluster_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_identifier`;
  }

  get database_name(): string {
    return `${this.resourceType}.${this.resourceName}.database_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get partner_name(): string {
    return `${this.resourceType}.${this.resourceName}.partner_name`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get status_message(): string {
    return `${this.resourceType}.${this.resourceName}.status_message`;
  }
}
