import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRedshiftServiceAccountArgs {
  region?: string;
}

export class data_aws_redshift_service_account extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsRedshiftServiceAccountArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_redshift_service_account", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
