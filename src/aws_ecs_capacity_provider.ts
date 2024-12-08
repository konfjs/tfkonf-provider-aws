import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEcsCapacityProviderArgsAutoScalingGroupProviderManagedScaling {
}

export interface AwsEcsCapacityProviderArgsAutoScalingGroupProvider {
  auto_scaling_group_arn: string;
  managed_scaling?: AwsEcsCapacityProviderArgsAutoScalingGroupProviderManagedScaling;
}

export interface AwsEcsCapacityProviderArgs {
  name: string;
  tags?: { [key: string]: string };
  auto_scaling_group_provider: AwsEcsCapacityProviderArgsAutoScalingGroupProvider;
}

export class aws_ecs_capacity_provider extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEcsCapacityProviderArgs) {
    const meta = {auto_scaling_group_provider:{isBlock:true,managed_scaling:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_ecs_capacity_provider", resourceName);
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
