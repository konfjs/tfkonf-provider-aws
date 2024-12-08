import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsNeptuneOrderableDbInstanceArgs {
  engine?: string;
  license_model?: string;
  preferred_instance_classes?: string[];
}

export class data_aws_neptune_orderable_db_instance extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsNeptuneOrderableDbInstanceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_neptune_orderable_db_instance", resourceName);
  }

  get availability_zones(): string {
    return `data.${this.resourceType}.${this.resourceName}.availability_zones`;
  }

  get engine_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.engine_version`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_class(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_class`;
  }

  get max_iops_per_db_instance(): string {
    return `data.${this.resourceType}.${this.resourceName}.max_iops_per_db_instance`;
  }

  get max_iops_per_gib(): string {
    return `data.${this.resourceType}.${this.resourceName}.max_iops_per_gib`;
  }

  get max_storage_size(): string {
    return `data.${this.resourceType}.${this.resourceName}.max_storage_size`;
  }

  get min_iops_per_db_instance(): string {
    return `data.${this.resourceType}.${this.resourceName}.min_iops_per_db_instance`;
  }

  get min_iops_per_gib(): string {
    return `data.${this.resourceType}.${this.resourceName}.min_iops_per_gib`;
  }

  get min_storage_size(): string {
    return `data.${this.resourceType}.${this.resourceName}.min_storage_size`;
  }

  get multi_az_capable(): string {
    return `data.${this.resourceType}.${this.resourceName}.multi_az_capable`;
  }

  get read_replica_capable(): string {
    return `data.${this.resourceType}.${this.resourceName}.read_replica_capable`;
  }

  get storage_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.storage_type`;
  }

  get supports_enhanced_monitoring(): string {
    return `data.${this.resourceType}.${this.resourceName}.supports_enhanced_monitoring`;
  }

  get supports_iam_database_authentication(): string {
    return `data.${this.resourceType}.${this.resourceName}.supports_iam_database_authentication`;
  }

  get supports_iops(): string {
    return `data.${this.resourceType}.${this.resourceName}.supports_iops`;
  }

  get supports_performance_insights(): string {
    return `data.${this.resourceType}.${this.resourceName}.supports_performance_insights`;
  }

  get supports_storage_encryption(): string {
    return `data.${this.resourceType}.${this.resourceName}.supports_storage_encryption`;
  }

  get vpc(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc`;
  }
}
