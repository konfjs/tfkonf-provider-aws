import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRedshiftProducerDataSharesArgsDataShares {
}

export interface DataAwsRedshiftProducerDataSharesArgs {
  producer_arn: string;
  status?: string;
  data_shares?: DataAwsRedshiftProducerDataSharesArgsDataShares[];
}

export class data_aws_redshift_producer_data_shares extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsRedshiftProducerDataSharesArgs) {
    const meta = {data_shares:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_redshift_producer_data_shares", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get producer_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.producer_arn`;
  }
}
