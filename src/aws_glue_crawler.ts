import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlueCrawlerArgsCatalogTarget {
  connection_name?: string;
  database_name: string;
  dlq_event_queue_arn?: string;
  event_queue_arn?: string;
  tables: string[];
}

export interface AwsGlueCrawlerArgsDeltaTarget {
  connection_name?: string;
  create_native_delta_table?: boolean;
  delta_tables: string[];
  write_manifest: boolean;
}

export interface AwsGlueCrawlerArgsDynamodbTarget {
  path: string;
  scan_all?: boolean;
  scan_rate?: number;
}

export interface AwsGlueCrawlerArgsHudiTarget {
  connection_name?: string;
  exclusions?: string[];
  maximum_traversal_depth: number;
  paths: string[];
}

export interface AwsGlueCrawlerArgsIcebergTarget {
  connection_name?: string;
  exclusions?: string[];
  maximum_traversal_depth: number;
  paths: string[];
}

export interface AwsGlueCrawlerArgsJdbcTarget {
  connection_name: string;
  enable_additional_metadata?: string[];
  exclusions?: string[];
  path: string;
}

export interface AwsGlueCrawlerArgsLakeFormationConfiguration {
  use_lake_formation_credentials?: boolean;
}

export interface AwsGlueCrawlerArgsLineageConfiguration {
  crawler_lineage_settings?: string;
}

export interface AwsGlueCrawlerArgsMongodbTarget {
  connection_name: string;
  path: string;
  scan_all?: boolean;
}

export interface AwsGlueCrawlerArgsRecrawlPolicy {
  recrawl_behavior?: string;
}

export interface AwsGlueCrawlerArgsS3Target {
  connection_name?: string;
  dlq_event_queue_arn?: string;
  event_queue_arn?: string;
  exclusions?: string[];
  path: string;
  sample_size?: number;
}

export interface AwsGlueCrawlerArgsSchemaChangePolicy {
  delete_behavior?: string;
  update_behavior?: string;
}

export interface AwsGlueCrawlerArgs {
  classifiers?: string[];
  configuration?: string;
  database_name: string;
  description?: string;
  name: string;
  role: string;
  schedule?: string;
  security_configuration?: string;
  table_prefix?: string;
  tags?: { [key: string]: string };
  catalog_target?: AwsGlueCrawlerArgsCatalogTarget[];
  delta_target?: AwsGlueCrawlerArgsDeltaTarget[];
  dynamodb_target?: AwsGlueCrawlerArgsDynamodbTarget[];
  hudi_target?: AwsGlueCrawlerArgsHudiTarget[];
  iceberg_target?: AwsGlueCrawlerArgsIcebergTarget[];
  jdbc_target?: AwsGlueCrawlerArgsJdbcTarget[];
  lake_formation_configuration?: AwsGlueCrawlerArgsLakeFormationConfiguration;
  lineage_configuration?: AwsGlueCrawlerArgsLineageConfiguration;
  mongodb_target?: AwsGlueCrawlerArgsMongodbTarget[];
  recrawl_policy?: AwsGlueCrawlerArgsRecrawlPolicy;
  s3_target?: AwsGlueCrawlerArgsS3Target[];
  schema_change_policy?: AwsGlueCrawlerArgsSchemaChangePolicy;
}

export class aws_glue_crawler extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsGlueCrawlerArgs) {
    const meta = {catalog_target:{isBlock:true},delta_target:{isBlock:true},dynamodb_target:{isBlock:true},hudi_target:{isBlock:true},iceberg_target:{isBlock:true},jdbc_target:{isBlock:true},lake_formation_configuration:{isBlock:true},lineage_configuration:{isBlock:true},mongodb_target:{isBlock:true},recrawl_policy:{isBlock:true},s3_target:{isBlock:true},schema_change_policy:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_glue_crawler", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get database_name(): string {
    return `${this.resourceType}.${this.resourceName}.database_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
