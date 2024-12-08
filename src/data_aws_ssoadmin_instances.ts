import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSsoadminInstancesArgs {
}

export class data_aws_ssoadmin_instances extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsSsoadminInstancesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_ssoadmin_instances", resourceName);
  }

  get arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.arns`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get identity_store_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.identity_store_ids`;
  }
}
