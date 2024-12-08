import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMskClusterPolicyArgs {
  cluster_arn: string;
  policy: string;
}

export class aws_msk_cluster_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsMskClusterPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_msk_cluster_policy", resourceName);
  }

  get cluster_arn(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_arn`;
  }

  get current_version(): string {
    return `${this.resourceType}.${this.resourceName}.current_version`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }
}
