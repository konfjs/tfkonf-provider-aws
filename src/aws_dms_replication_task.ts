import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDmsReplicationTaskArgs {
  cdc_start_time?: string;
  migration_type: string;
  replication_instance_arn: string;
  replication_task_id: string;
  resource_identifier?: string;
  source_endpoint_arn: string;
  start_replication_task?: boolean;
  table_mappings: string;
  tags?: { [key: string]: string };
  target_endpoint_arn: string;
}

export class aws_dms_replication_task extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDmsReplicationTaskArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_dms_replication_task", resourceName);
  }

  get cdc_start_position(): string {
    return `${this.resourceType}.${this.resourceName}.cdc_start_position`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get migration_type(): string {
    return `${this.resourceType}.${this.resourceName}.migration_type`;
  }

  get replication_instance_arn(): string {
    return `${this.resourceType}.${this.resourceName}.replication_instance_arn`;
  }

  get replication_task_arn(): string {
    return `${this.resourceType}.${this.resourceName}.replication_task_arn`;
  }

  get replication_task_id(): string {
    return `${this.resourceType}.${this.resourceName}.replication_task_id`;
  }

  get replication_task_settings(): string {
    return `${this.resourceType}.${this.resourceName}.replication_task_settings`;
  }

  get source_endpoint_arn(): string {
    return `${this.resourceType}.${this.resourceName}.source_endpoint_arn`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
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
