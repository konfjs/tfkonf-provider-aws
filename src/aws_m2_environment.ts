import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsM2EnvironmentArgsHighAvailabilityConfig {
  desired_capacity: number;
}

export interface AwsM2EnvironmentArgsStorageConfigurationEfs {
  file_system_id: string;
  mount_point: string;
}

export interface AwsM2EnvironmentArgsStorageConfigurationFsx {
  file_system_id: string;
  mount_point: string;
}

export interface AwsM2EnvironmentArgsStorageConfiguration {
  efs?: AwsM2EnvironmentArgsStorageConfigurationEfs[];
  fsx?: AwsM2EnvironmentArgsStorageConfigurationFsx[];
}

export interface AwsM2EnvironmentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsM2EnvironmentArgs {
  apply_changes_during_maintenance_window?: boolean;
  description?: string;
  engine_type: string;
  force_update?: boolean;
  instance_type: string;
  kms_key_id?: string;
  name: string;
  tags?: { [key: string]: string };
  high_availability_config?: AwsM2EnvironmentArgsHighAvailabilityConfig[];
  storage_configuration?: AwsM2EnvironmentArgsStorageConfiguration[];
  timeouts?: AwsM2EnvironmentArgsTimeouts;
}

export class aws_m2_environment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsM2EnvironmentArgs) {
    const meta = {high_availability_config:{isBlock:true},storage_configuration:{isBlock:true,efs:{isBlock:true},fsx:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_m2_environment", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get engine_type(): string {
    return `${this.resourceType}.${this.resourceName}.engine_type`;
  }

  get engine_version(): string {
    return `${this.resourceType}.${this.resourceName}.engine_version`;
  }

  get environment_id(): string {
    return `${this.resourceType}.${this.resourceName}.environment_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_type(): string {
    return `${this.resourceType}.${this.resourceName}.instance_type`;
  }

  get load_balancer_arn(): string {
    return `${this.resourceType}.${this.resourceName}.load_balancer_arn`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get preferred_maintenance_window(): string {
    return `${this.resourceType}.${this.resourceName}.preferred_maintenance_window`;
  }

  get publicly_accessible(): string {
    return `${this.resourceType}.${this.resourceName}.publicly_accessible`;
  }

  get security_group_ids(): string {
    return `${this.resourceType}.${this.resourceName}.security_group_ids`;
  }

  get subnet_ids(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_ids`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
