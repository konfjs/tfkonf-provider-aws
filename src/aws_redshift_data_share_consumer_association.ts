import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRedshiftDataShareConsumerAssociationArgs {
  allow_writes?: boolean;
  associate_entire_account?: boolean;
  consumer_arn?: string;
  consumer_region?: string;
  data_share_arn: string;
}

export class aws_redshift_data_share_consumer_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRedshiftDataShareConsumerAssociationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_redshift_data_share_consumer_association", resourceName);
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
