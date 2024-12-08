import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsDocdbEngineVersionArgs {
  engine?: string;
  preferred_versions?: string[];
}

export class data_aws_docdb_engine_version extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsDocdbEngineVersionArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_docdb_engine_version", resourceName);
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

  get supports_log_exports_to_cloudwatch(): string {
    return `data.${this.resourceType}.${this.resourceName}.supports_log_exports_to_cloudwatch`;
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
