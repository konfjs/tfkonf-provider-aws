import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsVpclatticeResourcePolicyArgs {
  resource_arn: string;
}

export class data_aws_vpclattice_resource_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsVpclatticeResourcePolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_vpclattice_resource_policy", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy`;
  }

  get resource_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.resource_arn`;
  }
}
