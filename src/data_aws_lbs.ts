import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsLbsArgs {
  tags?: { [key: string]: string };
}

export class data_aws_lbs extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsLbsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_lbs", resourceName);
  }

  get arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.arns`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
