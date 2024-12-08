import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsFsxOntapVolumeArgsAggregateConfiguration {
}

export interface AwsFsxOntapVolumeArgsSnaplockConfigurationAutocommitPeriod {
  value?: number;
}

export interface AwsFsxOntapVolumeArgsSnaplockConfigurationRetentionPeriodDefaultRetention {
  value?: number;
}

export interface AwsFsxOntapVolumeArgsSnaplockConfigurationRetentionPeriodMaximumRetention {
  value?: number;
}

export interface AwsFsxOntapVolumeArgsSnaplockConfigurationRetentionPeriodMinimumRetention {
  value?: number;
}

export interface AwsFsxOntapVolumeArgsSnaplockConfigurationRetentionPeriod {
  default_retention?: AwsFsxOntapVolumeArgsSnaplockConfigurationRetentionPeriodDefaultRetention;
  maximum_retention?: AwsFsxOntapVolumeArgsSnaplockConfigurationRetentionPeriodMaximumRetention;
  minimum_retention?: AwsFsxOntapVolumeArgsSnaplockConfigurationRetentionPeriodMinimumRetention;
}

export interface AwsFsxOntapVolumeArgsSnaplockConfiguration {
  audit_log_volume?: boolean;
  privileged_delete?: string;
  snaplock_type: string;
  volume_append_mode_enabled?: boolean;
  autocommit_period?: AwsFsxOntapVolumeArgsSnaplockConfigurationAutocommitPeriod;
  retention_period?: AwsFsxOntapVolumeArgsSnaplockConfigurationRetentionPeriod;
}

export interface AwsFsxOntapVolumeArgsTieringPolicy {
}

export interface AwsFsxOntapVolumeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsFsxOntapVolumeArgs {
  bypass_snaplock_enterprise_retention?: boolean;
  copy_tags_to_backups?: boolean;
  final_backup_tags?: { [key: string]: string };
  junction_path?: string;
  name: string;
  skip_final_backup?: boolean;
  storage_efficiency_enabled?: boolean;
  storage_virtual_machine_id: string;
  tags?: { [key: string]: string };
  volume_type?: string;
  aggregate_configuration?: AwsFsxOntapVolumeArgsAggregateConfiguration;
  snaplock_configuration?: AwsFsxOntapVolumeArgsSnaplockConfiguration;
  tiering_policy?: AwsFsxOntapVolumeArgsTieringPolicy;
  timeouts?: AwsFsxOntapVolumeArgsTimeouts;
}

export class aws_fsx_ontap_volume extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsFsxOntapVolumeArgs) {
    const meta = {aggregate_configuration:{isBlock:true},snaplock_configuration:{isBlock:true,autocommit_period:{isBlock:true},retention_period:{isBlock:true,default_retention:{isBlock:true},maximum_retention:{isBlock:true},minimum_retention:{isBlock:true}}},tiering_policy:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_fsx_ontap_volume", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get file_system_id(): string {
    return `${this.resourceType}.${this.resourceName}.file_system_id`;
  }

  get flexcache_endpoint_type(): string {
    return `${this.resourceType}.${this.resourceName}.flexcache_endpoint_type`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get ontap_volume_type(): string {
    return `${this.resourceType}.${this.resourceName}.ontap_volume_type`;
  }

  get security_style(): string {
    return `${this.resourceType}.${this.resourceName}.security_style`;
  }

  get size_in_bytes(): string {
    return `${this.resourceType}.${this.resourceName}.size_in_bytes`;
  }

  get size_in_megabytes(): string {
    return `${this.resourceType}.${this.resourceName}.size_in_megabytes`;
  }

  get snapshot_policy(): string {
    return `${this.resourceType}.${this.resourceName}.snapshot_policy`;
  }

  get storage_virtual_machine_id(): string {
    return `${this.resourceType}.${this.resourceName}.storage_virtual_machine_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get uuid(): string {
    return `${this.resourceType}.${this.resourceName}.uuid`;
  }

  get volume_style(): string {
    return `${this.resourceType}.${this.resourceName}.volume_style`;
  }
}
