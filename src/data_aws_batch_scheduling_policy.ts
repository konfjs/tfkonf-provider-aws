import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsBatchSchedulingPolicyArgs {
  arn: string;
}

export class data_aws_batch_scheduling_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsBatchSchedulingPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_batch_scheduling_policy", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get fair_share_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.fair_share_policy`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
