import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRdsEngineVersionArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsRdsEngineVersionArgs {
  default_only?: boolean;
  engine: string;
  has_major_target?: boolean;
  has_minor_target?: boolean;
  include_all?: boolean;
  latest?: boolean;
  preferred_major_targets?: string[];
  preferred_upgrade_targets?: string[];
  preferred_versions?: string[];
  filter?: DataAwsRdsEngineVersionArgsFilter[];
}

export class data_aws_rds_engine_version extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsRdsEngineVersionArgs) {
    const meta = {filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_rds_engine_version", resourceName);
  }

  get default_character_set(): string {
    return `data.${this.resourceType}.${this.resourceName}.default_character_set`;
  }

  get engine(): string {
    return `data.${this.resourceType}.${this.resourceName}.engine`;
  }

  get engine_description(): string {
    return `data.${this.resourceType}.${this.resourceName}.engine_description`;
  }

  get exportable_log_types(): string {
    return `data.${this.resourceType}.${this.resourceName}.exportable_log_types`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get parameter_group_family(): string {
    return `data.${this.resourceType}.${this.resourceName}.parameter_group_family`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get supported_character_sets(): string {
    return `data.${this.resourceType}.${this.resourceName}.supported_character_sets`;
  }

  get supported_feature_names(): string {
    return `data.${this.resourceType}.${this.resourceName}.supported_feature_names`;
  }

  get supported_modes(): string {
    return `data.${this.resourceType}.${this.resourceName}.supported_modes`;
  }

  get supported_timezones(): string {
    return `data.${this.resourceType}.${this.resourceName}.supported_timezones`;
  }

  get supports_global_databases(): string {
    return `data.${this.resourceType}.${this.resourceName}.supports_global_databases`;
  }

  get supports_limitless_database(): string {
    return `data.${this.resourceType}.${this.resourceName}.supports_limitless_database`;
  }

  get supports_log_exports_to_cloudwatch(): string {
    return `data.${this.resourceType}.${this.resourceName}.supports_log_exports_to_cloudwatch`;
  }

  get supports_parallel_query(): string {
    return `data.${this.resourceType}.${this.resourceName}.supports_parallel_query`;
  }

  get supports_read_replica(): string {
    return `data.${this.resourceType}.${this.resourceName}.supports_read_replica`;
  }

  get valid_major_targets(): string {
    return `data.${this.resourceType}.${this.resourceName}.valid_major_targets`;
  }

  get valid_minor_targets(): string {
    return `data.${this.resourceType}.${this.resourceName}.valid_minor_targets`;
  }

  get valid_upgrade_targets(): string {
    return `data.${this.resourceType}.${this.resourceName}.valid_upgrade_targets`;
  }

  get version(): string {
    return `data.${this.resourceType}.${this.resourceName}.version`;
  }

  get version_actual(): string {
    return `data.${this.resourceType}.${this.resourceName}.version_actual`;
  }

  get version_description(): string {
    return `data.${this.resourceType}.${this.resourceName}.version_description`;
  }
}
