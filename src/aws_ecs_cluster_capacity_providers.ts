import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEcsClusterCapacityProvidersArgsDefaultCapacityProviderStrategy {
  base?: number;
  capacity_provider: string;
  weight?: number;
}

export interface AwsEcsClusterCapacityProvidersArgs {
  capacity_providers?: string[];
  cluster_name: string;
  default_capacity_provider_strategy?: AwsEcsClusterCapacityProvidersArgsDefaultCapacityProviderStrategy[];
}

export class aws_ecs_cluster_capacity_providers extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEcsClusterCapacityProvidersArgs) {
    const meta = {default_capacity_provider_strategy:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ecs_cluster_capacity_providers", resourceName);
  }

  get cluster_name(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
