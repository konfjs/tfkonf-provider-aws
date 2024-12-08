import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsNeptuneEngineVersionArgs {
  engine?: string;
  preferred_versions?: string[];
}

export class data_aws_neptune_engine_version extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsNeptuneEngineVersionArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_neptune_engine_version", resourceName);
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

  get supported_timezones(): string {
    return `data.${this.resourceType}.${this.resourceName}.supported_timezones`;
  }

  get supports_log_exports_to_cloudwatch(): string {
    return `data.${this.resourceType}.${this.resourceName}.supports_log_exports_to_cloudwatch`;
  }

  get supports_read_replica(): string {
    return `data.${this.resourceType}.${this.resourceName}.supports_read_replica`;
  }

  get valid_upgrade_targets(): string {
    return `data.${this.resourceType}.${this.resourceName}.valid_upgrade_targets`;
  }

  get version(): string {
    return `data.${this.resourceType}.${this.resourceName}.version`;
  }

  get version_description(): string {
    return `data.${this.resourceType}.${this.resourceName}.version_description`;
  }
}
