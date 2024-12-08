import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsElasticacheServerlessCacheArgs {
  name: string;
}

export class data_aws_elasticache_serverless_cache extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsElasticacheServerlessCacheArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_elasticache_serverless_cache", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get cache_usage_limits(): string {
    return `data.${this.resourceType}.${this.resourceName}.cache_usage_limits`;
  }

  get create_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_time`;
  }

  get daily_snapshot_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.daily_snapshot_time`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get endpoint(): string {
    return `data.${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get engine(): string {
    return `data.${this.resourceType}.${this.resourceName}.engine`;
  }

  get full_engine_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.full_engine_version`;
  }

  get kms_key_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get major_engine_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.major_engine_version`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get reader_endpoint(): string {
    return `data.${this.resourceType}.${this.resourceName}.reader_endpoint`;
  }

  get security_group_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_group_ids`;
  }

  get snapshot_retention_limit(): string {
    return `data.${this.resourceType}.${this.resourceName}.snapshot_retention_limit`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get subnet_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnet_ids`;
  }

  get user_group_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_group_id`;
  }
}
