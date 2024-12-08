import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEcsClusterArgsConfigurationExecuteCommandConfigurationLogConfiguration {
  cloud_watch_encryption_enabled?: boolean;
  cloud_watch_log_group_name?: string;
  s3_bucket_encryption_enabled?: boolean;
  s3_bucket_name?: string;
  s3_key_prefix?: string;
}

export interface AwsEcsClusterArgsConfigurationExecuteCommandConfiguration {
  kms_key_id?: string;
  logging?: string;
  log_configuration?: AwsEcsClusterArgsConfigurationExecuteCommandConfigurationLogConfiguration;
}

export interface AwsEcsClusterArgsConfigurationManagedStorageConfiguration {
  fargate_ephemeral_storage_kms_key_id?: string;
  kms_key_id?: string;
}

export interface AwsEcsClusterArgsConfiguration {
  execute_command_configuration?: AwsEcsClusterArgsConfigurationExecuteCommandConfiguration;
  managed_storage_configuration?: AwsEcsClusterArgsConfigurationManagedStorageConfiguration;
}

export interface AwsEcsClusterArgsServiceConnectDefaults {
  namespace: string;
}

export interface AwsEcsClusterArgsSetting {
  name: string;
  value: string;
}

export interface AwsEcsClusterArgs {
  name: string;
  tags?: { [key: string]: string };
  configuration?: AwsEcsClusterArgsConfiguration;
  service_connect_defaults?: AwsEcsClusterArgsServiceConnectDefaults;
  setting?: AwsEcsClusterArgsSetting[];
}

export class aws_ecs_cluster extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEcsClusterArgs) {
    const meta = {configuration:{isBlock:true,execute_command_configuration:{isBlock:true,log_configuration:{isBlock:true}},managed_storage_configuration:{isBlock:true}},service_connect_defaults:{isBlock:true},setting:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ecs_cluster", resourceName);
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
