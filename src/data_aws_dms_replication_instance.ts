import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsDmsReplicationInstanceArgs {
  replication_instance_id: string;
}

export class data_aws_dms_replication_instance extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsDmsReplicationInstanceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_dms_replication_instance", resourceName);
  }

  get allocated_storage(): string {
    return `data.${this.resourceType}.${this.resourceName}.allocated_storage`;
  }

  get auto_minor_version_upgrade(): string {
    return `data.${this.resourceType}.${this.resourceName}.auto_minor_version_upgrade`;
  }

  get availability_zone(): string {
    return `data.${this.resourceType}.${this.resourceName}.availability_zone`;
  }

  get engine_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.engine_version`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_arn`;
  }

  get multi_az(): string {
    return `data.${this.resourceType}.${this.resourceName}.multi_az`;
  }

  get network_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.network_type`;
  }

  get preferred_maintenance_window(): string {
    return `data.${this.resourceType}.${this.resourceName}.preferred_maintenance_window`;
  }

  get publicly_accessible(): string {
    return `data.${this.resourceType}.${this.resourceName}.publicly_accessible`;
  }

  get replication_instance_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.replication_instance_arn`;
  }

  get replication_instance_class(): string {
    return `data.${this.resourceType}.${this.resourceName}.replication_instance_class`;
  }

  get replication_instance_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.replication_instance_id`;
  }

  get replication_instance_private_ips(): string {
    return `data.${this.resourceType}.${this.resourceName}.replication_instance_private_ips`;
  }

  get replication_instance_public_ips(): string {
    return `data.${this.resourceType}.${this.resourceName}.replication_instance_public_ips`;
  }

  get replication_subnet_group_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.replication_subnet_group_id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get vpc_security_group_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_security_group_ids`;
  }
}
