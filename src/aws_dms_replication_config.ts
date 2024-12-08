import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDmsReplicationConfigArgsComputeConfig {
  dns_name_servers?: string;
  max_capacity_units?: number;
  min_capacity_units?: number;
  replication_subnet_group_id: string;
}

export interface AwsDmsReplicationConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsDmsReplicationConfigArgs {
  replication_config_identifier: string;
  replication_type: string;
  source_endpoint_arn: string;
  start_replication?: boolean;
  supplemental_settings?: string;
  table_mappings: string;
  tags?: { [key: string]: string };
  target_endpoint_arn: string;
  compute_config: AwsDmsReplicationConfigArgsComputeConfig;
  timeouts?: AwsDmsReplicationConfigArgsTimeouts;
}

export class aws_dms_replication_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDmsReplicationConfigArgs) {
    const meta = {compute_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_dms_replication_config", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get replication_config_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.replication_config_identifier`;
  }

  get replication_settings(): string {
    return `${this.resourceType}.${this.resourceName}.replication_settings`;
  }

  get replication_type(): string {
    return `${this.resourceType}.${this.resourceName}.replication_type`;
  }

  get resource_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.resource_identifier`;
  }

  get source_endpoint_arn(): string {
    return `${this.resourceType}.${this.resourceName}.source_endpoint_arn`;
  }

  get table_mappings(): string {
    return `${this.resourceType}.${this.resourceName}.table_mappings`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get target_endpoint_arn(): string {
    return `${this.resourceType}.${this.resourceName}.target_endpoint_arn`;
  }
}
