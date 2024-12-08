import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRegionArgs {
}

export class data_aws_region extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsRegionArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_region", resourceName);
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get endpoint(): string {
    return `data.${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }
}
