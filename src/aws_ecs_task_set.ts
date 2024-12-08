import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEcsTaskSetArgsCapacityProviderStrategy {
  base?: number;
  capacity_provider: string;
  weight: number;
}

export interface AwsEcsTaskSetArgsLoadBalancer {
  container_name: string;
  container_port?: number;
  load_balancer_name?: string;
  target_group_arn?: string;
}

export interface AwsEcsTaskSetArgsNetworkConfiguration {
  assign_public_ip?: boolean;
  security_groups?: string[];
  subnets: string[];
}

export interface AwsEcsTaskSetArgsScale {
  unit?: string;
  value?: number;
}

export interface AwsEcsTaskSetArgsServiceRegistries {
  container_name?: string;
  container_port?: number;
  port?: number;
  registry_arn: string;
}

export interface AwsEcsTaskSetArgs {
  cluster: string;
  force_delete?: boolean;
  service: string;
  tags?: { [key: string]: string };
  task_definition: string;
  wait_until_stable?: boolean;
  wait_until_stable_timeout?: string;
  capacity_provider_strategy?: AwsEcsTaskSetArgsCapacityProviderStrategy[];
  load_balancer?: AwsEcsTaskSetArgsLoadBalancer[];
  network_configuration?: AwsEcsTaskSetArgsNetworkConfiguration;
  scale?: AwsEcsTaskSetArgsScale;
  service_registries?: AwsEcsTaskSetArgsServiceRegistries;
}

export class aws_ecs_task_set extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEcsTaskSetArgs) {
    const meta = {capacity_provider_strategy:{isBlock:true},load_balancer:{isBlock:true},network_configuration:{isBlock:true},scale:{isBlock:true},service_registries:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ecs_task_set", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get cluster(): string {
    return `${this.resourceType}.${this.resourceName}.cluster`;
  }

  get external_id(): string {
    return `${this.resourceType}.${this.resourceName}.external_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get launch_type(): string {
    return `${this.resourceType}.${this.resourceName}.launch_type`;
  }

  get platform_version(): string {
    return `${this.resourceType}.${this.resourceName}.platform_version`;
  }

  get service(): string {
    return `${this.resourceType}.${this.resourceName}.service`;
  }

  get stability_status(): string {
    return `${this.resourceType}.${this.resourceName}.stability_status`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get task_definition(): string {
    return `${this.resourceType}.${this.resourceName}.task_definition`;
  }

  get task_set_id(): string {
    return `${this.resourceType}.${this.resourceName}.task_set_id`;
  }
}
