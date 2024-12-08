import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEmrserverlessApplicationArgsAutoStartConfiguration {
  enabled?: boolean;
}

export interface AwsEmrserverlessApplicationArgsAutoStopConfiguration {
  enabled?: boolean;
  idle_timeout_minutes?: number;
}

export interface AwsEmrserverlessApplicationArgsImageConfiguration {
  image_uri: string;
}

export interface AwsEmrserverlessApplicationArgsInitialCapacityInitialCapacityConfigWorkerConfiguration {
  cpu: string;
  memory: string;
}

export interface AwsEmrserverlessApplicationArgsInitialCapacityInitialCapacityConfig {
  worker_count: number;
  worker_configuration?: AwsEmrserverlessApplicationArgsInitialCapacityInitialCapacityConfigWorkerConfiguration;
}

export interface AwsEmrserverlessApplicationArgsInitialCapacity {
  initial_capacity_type: string;
  initial_capacity_config?: AwsEmrserverlessApplicationArgsInitialCapacityInitialCapacityConfig;
}

export interface AwsEmrserverlessApplicationArgsInteractiveConfiguration {
}

export interface AwsEmrserverlessApplicationArgsMaximumCapacity {
  cpu: string;
  memory: string;
}

export interface AwsEmrserverlessApplicationArgsNetworkConfiguration {
  security_group_ids?: string[];
  subnet_ids?: string[];
}

export interface AwsEmrserverlessApplicationArgs {
  architecture?: string;
  name: string;
  release_label: string;
  tags?: { [key: string]: string };
  type: string;
  auto_start_configuration?: AwsEmrserverlessApplicationArgsAutoStartConfiguration;
  auto_stop_configuration?: AwsEmrserverlessApplicationArgsAutoStopConfiguration;
  image_configuration?: AwsEmrserverlessApplicationArgsImageConfiguration;
  initial_capacity?: AwsEmrserverlessApplicationArgsInitialCapacity[];
  interactive_configuration?: AwsEmrserverlessApplicationArgsInteractiveConfiguration;
  maximum_capacity?: AwsEmrserverlessApplicationArgsMaximumCapacity;
  network_configuration?: AwsEmrserverlessApplicationArgsNetworkConfiguration;
}

export class aws_emrserverless_application extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEmrserverlessApplicationArgs) {
    const meta = {auto_start_configuration:{isBlock:true},auto_stop_configuration:{isBlock:true},image_configuration:{isBlock:true},initial_capacity:{isBlock:true,initial_capacity_config:{isBlock:true,worker_configuration:{isBlock:true}}},interactive_configuration:{isBlock:true},maximum_capacity:{isBlock:true},network_configuration:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_emrserverless_application", resourceName);
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

  get release_label(): string {
    return `${this.resourceType}.${this.resourceName}.release_label`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
