import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEmrManagedScalingPolicyArgsComputeLimits {
  maximum_capacity_units: number;
  maximum_core_capacity_units?: number;
  maximum_ondemand_capacity_units?: number;
  minimum_capacity_units: number;
  unit_type: string;
}

export interface AwsEmrManagedScalingPolicyArgs {
  cluster_id: string;
  compute_limits: AwsEmrManagedScalingPolicyArgsComputeLimits[];
}

export class aws_emr_managed_scaling_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEmrManagedScalingPolicyArgs) {
    const meta = {compute_limits:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_emr_managed_scaling_policy", resourceName);
  }

  get cluster_id(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
