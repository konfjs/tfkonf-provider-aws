import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesContainersEnv {
  name: string;
  value: string;
}

export interface AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesContainersResources {
  limits?: { [key: string]: string };
  requests?: { [key: string]: string };
}

export interface AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesContainersSecurityContext {
  privileged?: boolean;
  read_only_root_file_system?: boolean;
  run_as_group?: number;
  run_as_non_root?: boolean;
  run_as_user?: number;
}

export interface AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesContainersVolumeMounts {
  mount_path: string;
  name: string;
  read_only?: boolean;
}

export interface AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesContainers {
  args?: string[];
  command?: string[];
  image: string;
  image_pull_policy?: string;
  name?: string;
  env?: AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesContainersEnv[];
  resources?: AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesContainersResources;
  security_context?: AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesContainersSecurityContext;
  volume_mounts?: AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesContainersVolumeMounts[];
}

export interface AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesImagePullSecret {
  name: string;
}

export interface AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesInitContainersEnv {
  name: string;
  value: string;
}

export interface AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesInitContainersResources {
  limits?: { [key: string]: string };
  requests?: { [key: string]: string };
}

export interface AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesInitContainersSecurityContext {
  privileged?: boolean;
  read_only_root_file_system?: boolean;
  run_as_group?: number;
  run_as_non_root?: boolean;
  run_as_user?: number;
}

export interface AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesInitContainersVolumeMounts {
  mount_path: string;
  name: string;
  read_only?: boolean;
}

export interface AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesInitContainers {
  args?: string[];
  command?: string[];
  image: string;
  image_pull_policy?: string;
  name?: string;
  env?: AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesInitContainersEnv[];
  resources?: AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesInitContainersResources;
  security_context?: AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesInitContainersSecurityContext;
  volume_mounts?: AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesInitContainersVolumeMounts[];
}

export interface AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesMetadata {
  labels?: { [key: string]: string };
}

export interface AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesVolumesEmptyDir {
  medium?: string;
  size_limit: string;
}

export interface AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesVolumesHostPath {
  path: string;
}

export interface AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesVolumesSecret {
  optional?: boolean;
  secret_name: string;
}

export interface AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesVolumes {
  name?: string;
  empty_dir?: AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesVolumesEmptyDir;
  host_path?: AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesVolumesHostPath;
  secret?: AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesVolumesSecret;
}

export interface AwsBatchJobDefinitionArgsEksPropertiesPodProperties {
  dns_policy?: string;
  host_network?: boolean;
  service_account_name?: string;
  share_process_namespace?: boolean;
  containers: AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesContainers[];
  image_pull_secret?: AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesImagePullSecret[];
  init_containers?: AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesInitContainers[];
  metadata?: AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesMetadata;
  volumes?: AwsBatchJobDefinitionArgsEksPropertiesPodPropertiesVolumes[];
}

export interface AwsBatchJobDefinitionArgsEksProperties {
  pod_properties: AwsBatchJobDefinitionArgsEksPropertiesPodProperties;
}

export interface AwsBatchJobDefinitionArgsRetryStrategyEvaluateOnExit {
  action: string;
  on_exit_code?: string;
  on_reason?: string;
  on_status_reason?: string;
}

export interface AwsBatchJobDefinitionArgsRetryStrategy {
  attempts?: number;
  evaluate_on_exit?: AwsBatchJobDefinitionArgsRetryStrategyEvaluateOnExit[];
}

export interface AwsBatchJobDefinitionArgsTimeout {
  attempt_duration_seconds?: number;
}

export interface AwsBatchJobDefinitionArgs {
  container_properties?: string;
  deregister_on_new_revision?: boolean;
  ecs_properties?: string;
  name: string;
  node_properties?: string;
  parameters?: { [key: string]: string };
  platform_capabilities?: string[];
  propagate_tags?: boolean;
  scheduling_priority?: number;
  tags?: { [key: string]: string };
  type: string;
  eks_properties?: AwsBatchJobDefinitionArgsEksProperties;
  retry_strategy?: AwsBatchJobDefinitionArgsRetryStrategy;
  timeout?: AwsBatchJobDefinitionArgsTimeout;
}

export class aws_batch_job_definition extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsBatchJobDefinitionArgs) {
    const meta = {eks_properties:{isBlock:true,pod_properties:{isBlock:true,containers:{isBlock:true,env:{isBlock:true},resources:{isBlock:true},security_context:{isBlock:true},volume_mounts:{isBlock:true}},image_pull_secret:{isBlock:true},init_containers:{isBlock:true,env:{isBlock:true},resources:{isBlock:true},security_context:{isBlock:true},volume_mounts:{isBlock:true}},metadata:{isBlock:true},volumes:{isBlock:true,empty_dir:{isBlock:true},host_path:{isBlock:true},secret:{isBlock:true}}}},retry_strategy:{isBlock:true,evaluate_on_exit:{isBlock:true}},timeout:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_batch_job_definition", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get arn_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.arn_prefix`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get revision(): string {
    return `${this.resourceType}.${this.resourceName}.revision`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
