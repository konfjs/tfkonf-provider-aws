import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRedshiftDataShareAuthorizationArgs {
  allow_writes?: boolean;
  consumer_identifier: string;
  data_share_arn: string;
}

export class aws_redshift_data_share_authorization extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRedshiftDataShareAuthorizationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_redshift_data_share_authorization", resourceName);
  }

  get consumer_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.consumer_identifier`;
  }

  get data_share_arn(): string {
    return `${this.resourceType}.${this.resourceName}.data_share_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get managed_by(): string {
    return `${this.resourceType}.${this.resourceName}.managed_by`;
  }

  get producer_arn(): string {
    return `${this.resourceType}.${this.resourceName}.producer_arn`;
  }
}
