import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsOamSinksArgs {
}

export class data_aws_oam_sinks extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsOamSinksArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_oam_sinks", resourceName);
  }

  get arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.arns`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}