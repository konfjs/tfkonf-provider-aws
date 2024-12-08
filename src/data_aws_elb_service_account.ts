import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsElbServiceAccountArgs {
  region?: string;
}

export class data_aws_elb_service_account extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsElbServiceAccountArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_elb_service_account", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
