import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEcsTaskExecutionArgsCapacityProviderStrategy {
  base?: number;
  capacity_provider: string;
  weight?: number;
}

export interface DataAwsEcsTaskExecutionArgsNetworkConfiguration {
  assign_public_ip?: boolean;
  security_groups?: string[];
  subnets: string[];
}

export interface DataAwsEcsTaskExecutionArgsOverridesContainerOverridesEnvironment {
  key: string;
  value: string;
}

export interface DataAwsEcsTaskExecutionArgsOverridesContainerOverridesResourceRequirements {
  type: string;
  value: string;
}

export interface DataAwsEcsTaskExecutionArgsOverridesContainerOverrides {
  command?: string[];
  cpu?: number;
  memory?: number;
  memory_reservation?: number;
  name: string;
  environment?: DataAwsEcsTaskExecutionArgsOverridesContainerOverridesEnvironment[];
  resource_requirements?: DataAwsEcsTaskExecutionArgsOverridesContainerOverridesResourceRequirements[];
}

export interface DataAwsEcsTaskExecutionArgsOverridesInferenceAcceleratorOverrides {
  device_name?: string;
  device_type?: string;
}

export interface DataAwsEcsTaskExecutionArgsOverrides {
  cpu?: string;
  execution_role_arn?: string;
  memory?: string;
  task_role_arn?: string;
  container_overrides?: DataAwsEcsTaskExecutionArgsOverridesContainerOverrides[];
  inference_accelerator_overrides?: DataAwsEcsTaskExecutionArgsOverridesInferenceAcceleratorOverrides[];
}

export interface DataAwsEcsTaskExecutionArgsPlacementConstraints {
  expression?: string;
  type: string;
}

export interface DataAwsEcsTaskExecutionArgsPlacementStrategy {
  field?: string;
  type: string;
}

export interface DataAwsEcsTaskExecutionArgs {
  client_token?: string;
  cluster: string;
  desired_count?: number;
  enable_ecs_managed_tags?: boolean;
  enable_execute_command?: boolean;
  group?: string;
  launch_type?: string;
  platform_version?: string;
  propagate_tags?: string;
  reference_id?: string;
  started_by?: string;
  tags?: { [key: string]: string };
  task_definition: string;
  capacity_provider_strategy?: DataAwsEcsTaskExecutionArgsCapacityProviderStrategy[];
  network_configuration?: DataAwsEcsTaskExecutionArgsNetworkConfiguration;
  overrides?: DataAwsEcsTaskExecutionArgsOverrides;
  placement_constraints?: DataAwsEcsTaskExecutionArgsPlacementConstraints[];
  placement_strategy?: DataAwsEcsTaskExecutionArgsPlacementStrategy[];
}

export class data_aws_ecs_task_execution extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEcsTaskExecutionArgs) {
    const meta = {capacity_provider_strategy:{isBlock:true},network_configuration:{isBlock:true},overrides:{isBlock:true,container_overrides:{isBlock:true,environment:{isBlock:true},resource_requirements:{isBlock:true}},inference_accelerator_overrides:{isBlock:true}},placement_constraints:{isBlock:true},placement_strategy:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ecs_task_execution", resourceName);
  }

  get cluster(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get task_arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.task_arns`;
  }

  get task_definition(): string {
    return `data.${this.resourceType}.${this.resourceName}.task_definition`;
  }
}
