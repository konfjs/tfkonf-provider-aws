import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsBatchSchedulingPolicyArgsFairSharePolicyShareDistribution {
  share_identifier: string;
  weight_factor?: number;
}

export interface AwsBatchSchedulingPolicyArgsFairSharePolicy {
  compute_reservation?: number;
  share_decay_seconds?: number;
  share_distribution?: AwsBatchSchedulingPolicyArgsFairSharePolicyShareDistribution[];
}

export interface AwsBatchSchedulingPolicyArgs {
  name: string;
  tags?: { [key: string]: string };
  fair_share_policy?: AwsBatchSchedulingPolicyArgsFairSharePolicy;
}

export class aws_batch_scheduling_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsBatchSchedulingPolicyArgs) {
    const meta = {fair_share_policy:{isBlock:true,share_distribution:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_batch_scheduling_policy", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
