import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDrsReplicationConfigurationTemplateArgsPitPolicy {
  enabled?: boolean;
  interval: number;
  retention_duration: number;
  rule_id?: number;
  units: string;
}

export interface AwsDrsReplicationConfigurationTemplateArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsDrsReplicationConfigurationTemplateArgs {
  associate_default_security_group: boolean;
  bandwidth_throttling: number;
  create_public_ip: boolean;
  data_plane_routing: string;
  default_large_staging_disk_type: string;
  ebs_encryption: string;
  ebs_encryption_key_arn?: string;
  replication_server_instance_type: string;
  replication_servers_security_groups_ids: string[];
  staging_area_subnet_id: string;
  staging_area_tags: { [key: string]: string };
  tags?: { [key: string]: string };
  use_dedicated_replication_server: boolean;
  pit_policy?: AwsDrsReplicationConfigurationTemplateArgsPitPolicy[];
  timeouts?: AwsDrsReplicationConfigurationTemplateArgsTimeouts;
}

export class aws_drs_replication_configuration_template extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDrsReplicationConfigurationTemplateArgs) {
    const meta = {pit_policy:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_drs_replication_configuration_template", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get associate_default_security_group(): string {
    return `${this.resourceType}.${this.resourceName}.associate_default_security_group`;
  }

  get auto_replicate_new_disks(): string {
    return `${this.resourceType}.${this.resourceName}.auto_replicate_new_disks`;
  }

  get bandwidth_throttling(): string {
    return `${this.resourceType}.${this.resourceName}.bandwidth_throttling`;
  }

  get create_public_ip(): string {
    return `${this.resourceType}.${this.resourceName}.create_public_ip`;
  }

  get data_plane_routing(): string {
    return `${this.resourceType}.${this.resourceName}.data_plane_routing`;
  }

  get default_large_staging_disk_type(): string {
    return `${this.resourceType}.${this.resourceName}.default_large_staging_disk_type`;
  }

  get ebs_encryption(): string {
    return `${this.resourceType}.${this.resourceName}.ebs_encryption`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get replication_server_instance_type(): string {
    return `${this.resourceType}.${this.resourceName}.replication_server_instance_type`;
  }

  get replication_servers_security_groups_ids(): string {
    return `${this.resourceType}.${this.resourceName}.replication_servers_security_groups_ids`;
  }

  get staging_area_subnet_id(): string {
    return `${this.resourceType}.${this.resourceName}.staging_area_subnet_id`;
  }

  get staging_area_tags(): string {
    return `${this.resourceType}.${this.resourceName}.staging_area_tags`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get use_dedicated_replication_server(): string {
    return `${this.resourceType}.${this.resourceName}.use_dedicated_replication_server`;
  }
}
