import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkfirewallResourcePolicyArgs {
  policy: string;
  resource_arn: string;
}

export class aws_networkfirewall_resource_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsNetworkfirewallResourcePolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_networkfirewall_resource_policy", resourceName);
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
