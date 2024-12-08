import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRdsOrderableDbInstanceArgs {
  engine: string;
  engine_latest_version?: boolean;
  preferred_engine_versions?: string[];
  preferred_instance_classes?: string[];
}

export class data_aws_rds_orderable_db_instance extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsRdsOrderableDbInstanceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_rds_orderable_db_instance", resourceName);
  }

  get availability_zone_group(): string {
    return `data.${this.resourceType}.${this.resourceName}.availability_zone_group`;
  }

  get availability_zones(): string {
    return `data.${this.resourceType}.${this.resourceName}.availability_zones`;
  }

  get engine(): string {
    return `data.${this.resourceType}.${this.resourceName}.engine`;
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

  get license_model(): string {
    return `data.${this.resourceType}.${this.resourceName}.license_model`;
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

  get outpost_capable(): string {
    return `data.${this.resourceType}.${this.resourceName}.outpost_capable`;
  }

  get read_replica_capable(): string {
    return `data.${this.resourceType}.${this.resourceName}.read_replica_capable`;
  }

  get storage_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.storage_type`;
  }

  get supported_engine_modes(): string {
    return `data.${this.resourceType}.${this.resourceName}.supported_engine_modes`;
  }

  get supported_network_types(): string {
    return `data.${this.resourceType}.${this.resourceName}.supported_network_types`;
  }

  get supports_clusters(): string {
    return `data.${this.resourceType}.${this.resourceName}.supports_clusters`;
  }

  get supports_enhanced_monitoring(): string {
    return `data.${this.resourceType}.${this.resourceName}.supports_enhanced_monitoring`;
  }

  get supports_global_databases(): string {
    return `data.${this.resourceType}.${this.resourceName}.supports_global_databases`;
  }

  get supports_iam_database_authentication(): string {
    return `data.${this.resourceType}.${this.resourceName}.supports_iam_database_authentication`;
  }

  get supports_iops(): string {
    return `data.${this.resourceType}.${this.resourceName}.supports_iops`;
  }

  get supports_kerberos_authentication(): string {
    return `data.${this.resourceType}.${this.resourceName}.supports_kerberos_authentication`;
  }

  get supports_multi_az(): string {
    return `data.${this.resourceType}.${this.resourceName}.supports_multi_az`;
  }

  get supports_performance_insights(): string {
    return `data.${this.resourceType}.${this.resourceName}.supports_performance_insights`;
  }

  get supports_storage_autoscaling(): string {
    return `data.${this.resourceType}.${this.resourceName}.supports_storage_autoscaling`;
  }

  get supports_storage_encryption(): string {
    return `data.${this.resourceType}.${this.resourceName}.supports_storage_encryption`;
  }

  get vpc(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc`;
  }
}
