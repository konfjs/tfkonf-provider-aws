import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEcsTaskDefinitionArgsEphemeralStorage {
  size_in_gib: number;
}

export interface AwsEcsTaskDefinitionArgsInferenceAccelerator {
  device_name: string;
  device_type: string;
}

export interface AwsEcsTaskDefinitionArgsPlacementConstraints {
  expression?: string;
  type: string;
}

export interface AwsEcsTaskDefinitionArgsProxyConfiguration {
  container_name: string;
  properties?: { [key: string]: string };
  type?: string;
}

export interface AwsEcsTaskDefinitionArgsRuntimePlatform {
  cpu_architecture?: string;
  operating_system_family?: string;
}

export interface AwsEcsTaskDefinitionArgsVolumeDockerVolumeConfiguration {
  autoprovision?: boolean;
  driver?: string;
  driver_opts?: { [key: string]: string };
  labels?: { [key: string]: string };
}

export interface AwsEcsTaskDefinitionArgsVolumeEfsVolumeConfigurationAuthorizationConfig {
  access_point_id?: string;
  iam?: string;
}

export interface AwsEcsTaskDefinitionArgsVolumeEfsVolumeConfiguration {
  file_system_id: string;
  root_directory?: string;
  transit_encryption?: string;
  transit_encryption_port?: number;
  authorization_config?: AwsEcsTaskDefinitionArgsVolumeEfsVolumeConfigurationAuthorizationConfig;
}

export interface AwsEcsTaskDefinitionArgsVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig {
  credentials_parameter: string;
  domain: string;
}

export interface AwsEcsTaskDefinitionArgsVolumeFsxWindowsFileServerVolumeConfiguration {
  file_system_id: string;
  root_directory: string;
  authorization_config: AwsEcsTaskDefinitionArgsVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig;
}

export interface AwsEcsTaskDefinitionArgsVolume {
  host_path?: string;
  name: string;
  docker_volume_configuration?: AwsEcsTaskDefinitionArgsVolumeDockerVolumeConfiguration;
  efs_volume_configuration?: AwsEcsTaskDefinitionArgsVolumeEfsVolumeConfiguration;
  fsx_windows_file_server_volume_configuration?: AwsEcsTaskDefinitionArgsVolumeFsxWindowsFileServerVolumeConfiguration;
}

export interface AwsEcsTaskDefinitionArgs {
  container_definitions: string;
  cpu?: string;
  execution_role_arn?: string;
  family: string;
  ipc_mode?: string;
  memory?: string;
  pid_mode?: string;
  requires_compatibilities?: string[];
  skip_destroy?: boolean;
  tags?: { [key: string]: string };
  task_role_arn?: string;
  track_latest?: boolean;
  ephemeral_storage?: AwsEcsTaskDefinitionArgsEphemeralStorage;
  inference_accelerator?: AwsEcsTaskDefinitionArgsInferenceAccelerator[];
  placement_constraints?: AwsEcsTaskDefinitionArgsPlacementConstraints[];
  proxy_configuration?: AwsEcsTaskDefinitionArgsProxyConfiguration;
  runtime_platform?: AwsEcsTaskDefinitionArgsRuntimePlatform;
  volume?: AwsEcsTaskDefinitionArgsVolume[];
}

export class aws_ecs_task_definition extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEcsTaskDefinitionArgs) {
    const meta = {ephemeral_storage:{isBlock:true},inference_accelerator:{isBlock:true},placement_constraints:{isBlock:true},proxy_configuration:{isBlock:true},runtime_platform:{isBlock:true},volume:{isBlock:true,docker_volume_configuration:{isBlock:true},efs_volume_configuration:{isBlock:true,authorization_config:{isBlock:true}},fsx_windows_file_server_volume_configuration:{isBlock:true,authorization_config:{isBlock:true}}}};
    super(terraformConfig, "resource", args, meta, "aws_ecs_task_definition", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get arn_without_revision(): string {
    return `${this.resourceType}.${this.resourceName}.arn_without_revision`;
  }

  get container_definitions(): string {
    return `${this.resourceType}.${this.resourceName}.container_definitions`;
  }

  get family(): string {
    return `${this.resourceType}.${this.resourceName}.family`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get network_mode(): string {
    return `${this.resourceType}.${this.resourceName}.network_mode`;
  }

  get revision(): string {
    return `${this.resourceType}.${this.resourceName}.revision`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
