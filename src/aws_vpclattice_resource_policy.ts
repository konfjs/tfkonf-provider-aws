import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpclatticeResourcePolicyArgs {
  policy: string;
  resource_arn: string;
}

export class aws_vpclattice_resource_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsVpclatticeResourcePolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_vpclattice_resource_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }

  get resource_arn(): string {
    return `${this.resourceType}.${this.resourceName}.resource_arn`;
  }
}