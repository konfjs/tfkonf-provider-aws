import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsDmsReplicationTaskArgs {
  replication_task_id: string;
}

export class data_aws_dms_replication_task extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsDmsReplicationTaskArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_dms_replication_task", resourceName);
  }

  get cdc_start_position(): string {
    return `data.${this.resourceType}.${this.resourceName}.cdc_start_position`;
  }

  get cdc_start_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.cdc_start_time`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get migration_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.migration_type`;
  }

  get replication_instance_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.replication_instance_arn`;
  }

  get replication_task_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.replication_task_arn`;
  }

  get replication_task_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.replication_task_id`;
  }

  get replication_task_settings(): string {
    return `data.${this.resourceType}.${this.resourceName}.replication_task_settings`;
  }

  get source_endpoint_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.source_endpoint_arn`;
  }

  get start_replication_task(): string {
    return `data.${this.resourceType}.${this.resourceName}.start_replication_task`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get table_mappings(): string {
    return `data.${this.resourceType}.${this.resourceName}.table_mappings`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get target_endpoint_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.target_endpoint_arn`;
  }
}
