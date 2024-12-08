import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRedshiftDataSharesArgsDataShares {
}

export interface DataAwsRedshiftDataSharesArgs {
  data_shares?: DataAwsRedshiftDataSharesArgsDataShares[];
}

export class data_aws_redshift_data_shares extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsRedshiftDataSharesArgs) {
    const meta = {data_shares:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_redshift_data_shares", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
