import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsFinspaceKxClusterArgsAutoScalingConfiguration {
  auto_scaling_metric: string;
  max_node_count: number;
  metric_target: number;
  min_node_count: number;
  scale_in_cooldown_seconds: number;
  scale_out_cooldown_seconds: number;
}

export interface AwsFinspaceKxClusterArgsCacheStorageConfigurations {
  size: number;
  type: string;
}

export interface AwsFinspaceKxClusterArgsCapacityConfiguration {
  node_count: number;
  node_type: string;
}

export interface AwsFinspaceKxClusterArgsCode {
  s3_bucket: string;
  s3_key: string;
  s3_object_version?: string;
}

export interface AwsFinspaceKxClusterArgsDatabaseCacheConfigurations {
  cache_type: string;
  db_paths?: string[];
}

export interface AwsFinspaceKxClusterArgsDatabase {
  changeset_id?: string;
  database_name: string;
  dataview_name?: string;
  cache_configurations?: AwsFinspaceKxClusterArgsDatabaseCacheConfigurations[];
}

export interface AwsFinspaceKxClusterArgsSavedownStorageConfiguration {
  size?: number;
  type?: string;
  volume_name?: string;
}

export interface AwsFinspaceKxClusterArgsScalingGroupConfiguration {
  cpu?: number;
  memory_limit?: number;
  memory_reservation: number;
  node_count: number;
  scaling_group_name: string;
}

export interface AwsFinspaceKxClusterArgsTickerplantLogConfiguration {
  tickerplant_log_volumes: string[];
}

export interface AwsFinspaceKxClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsFinspaceKxClusterArgsVpcConfiguration {
  ip_address_type: string;
  security_group_ids: string[];
  subnet_ids: string[];
  vpc_id: string;
}

export interface AwsFinspaceKxClusterArgs {
  availability_zone_id?: string;
  az_mode: string;
  command_line_arguments?: { [key: string]: string };
  description?: string;
  environment_id: string;
  execution_role?: string;
  initialization_script?: string;
  name: string;
  release_label: string;
  tags?: { [key: string]: string };
  type: string;
  auto_scaling_configuration?: AwsFinspaceKxClusterArgsAutoScalingConfiguration;
  cache_storage_configurations?: AwsFinspaceKxClusterArgsCacheStorageConfigurations[];
  capacity_configuration?: AwsFinspaceKxClusterArgsCapacityConfiguration;
  code?: AwsFinspaceKxClusterArgsCode;
  database?: AwsFinspaceKxClusterArgsDatabase[];
  savedown_storage_configuration?: AwsFinspaceKxClusterArgsSavedownStorageConfiguration;
  scaling_group_configuration?: AwsFinspaceKxClusterArgsScalingGroupConfiguration;
  tickerplant_log_configuration?: AwsFinspaceKxClusterArgsTickerplantLogConfiguration[];
  timeouts?: AwsFinspaceKxClusterArgsTimeouts;
  vpc_configuration: AwsFinspaceKxClusterArgsVpcConfiguration;
}

export class aws_finspace_kx_cluster extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsFinspaceKxClusterArgs) {
    const meta = {auto_scaling_configuration:{isBlock:true},cache_storage_configurations:{isBlock:true},capacity_configuration:{isBlock:true},code:{isBlock:true},database:{isBlock:true,cache_configurations:{isBlock:true}},savedown_storage_configuration:{isBlock:true},scaling_group_configuration:{isBlock:true},tickerplant_log_configuration:{isBlock:true},timeouts:{isBlock:true},vpc_configuration:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_finspace_kx_cluster", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get az_mode(): string {
    return `${this.resourceType}.${this.resourceName}.az_mode`;
  }

  get created_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.created_timestamp`;
  }

  get environment_id(): string {
    return `${this.resourceType}.${this.resourceName}.environment_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_modified_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.last_modified_timestamp`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get release_label(): string {
    return `${this.resourceType}.${this.resourceName}.release_label`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get status_reason(): string {
    return `${this.resourceType}.${this.resourceName}.status_reason`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
