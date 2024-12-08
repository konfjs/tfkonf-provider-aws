import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsElasticacheServerlessCacheArgsCacheUsageLimitsDataStorage {
  maximum?: number;
  minimum?: number;
  unit: string;
}

export interface AwsElasticacheServerlessCacheArgsCacheUsageLimitsEcpuPerSecond {
  maximum?: number;
  minimum?: number;
}

export interface AwsElasticacheServerlessCacheArgsCacheUsageLimits {
  data_storage?: AwsElasticacheServerlessCacheArgsCacheUsageLimitsDataStorage[];
  ecpu_per_second?: AwsElasticacheServerlessCacheArgsCacheUsageLimitsEcpuPerSecond[];
}

export interface AwsElasticacheServerlessCacheArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsElasticacheServerlessCacheArgs {
  engine: string;
  kms_key_id?: string;
  name: string;
  snapshot_arns_to_restore?: string[];
  tags?: { [key: string]: string };
  user_group_id?: string;
  cache_usage_limits?: AwsElasticacheServerlessCacheArgsCacheUsageLimits[];
  timeouts?: AwsElasticacheServerlessCacheArgsTimeouts;
}

export class aws_elasticache_serverless_cache extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsElasticacheServerlessCacheArgs) {
    const meta = {cache_usage_limits:{isBlock:true,data_storage:{isBlock:true},ecpu_per_second:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_elasticache_serverless_cache", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get daily_snapshot_time(): string {
    return `${this.resourceType}.${this.resourceName}.daily_snapshot_time`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get engine(): string {
    return `${this.resourceType}.${this.resourceName}.engine`;
  }

  get full_engine_version(): string {
    return `${this.resourceType}.${this.resourceName}.full_engine_version`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get major_engine_version(): string {
    return `${this.resourceType}.${this.resourceName}.major_engine_version`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get reader_endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.reader_endpoint`;
  }

  get security_group_ids(): string {
    return `${this.resourceType}.${this.resourceName}.security_group_ids`;
  }

  get snapshot_retention_limit(): string {
    return `${this.resourceType}.${this.resourceName}.snapshot_retention_limit`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get subnet_ids(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_ids`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
