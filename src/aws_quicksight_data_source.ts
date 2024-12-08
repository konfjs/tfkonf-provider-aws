import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsQuicksightDataSourceArgsCredentialsCredentialPair {
  password: string;
  username: string;
}

export interface AwsQuicksightDataSourceArgsCredentials {
  copy_source_arn?: string;
  secret_arn?: string;
  credential_pair?: AwsQuicksightDataSourceArgsCredentialsCredentialPair;
}

export interface AwsQuicksightDataSourceArgsParametersAmazonElasticsearch {
  domain: string;
}

export interface AwsQuicksightDataSourceArgsParametersAthena {
  work_group?: string;
}

export interface AwsQuicksightDataSourceArgsParametersAurora {
  database: string;
  host: string;
  port: number;
}

export interface AwsQuicksightDataSourceArgsParametersAuroraPostgresql {
  database: string;
  host: string;
  port: number;
}

export interface AwsQuicksightDataSourceArgsParametersAwsIotAnalytics {
  data_set_name: string;
}

export interface AwsQuicksightDataSourceArgsParametersDatabricks {
  host: string;
  port: number;
  sql_endpoint_path: string;
}

export interface AwsQuicksightDataSourceArgsParametersJira {
  site_base_url: string;
}

export interface AwsQuicksightDataSourceArgsParametersMariaDb {
  database: string;
  host: string;
  port: number;
}

export interface AwsQuicksightDataSourceArgsParametersMysql {
  database: string;
  host: string;
  port: number;
}

export interface AwsQuicksightDataSourceArgsParametersOracle {
  database: string;
  host: string;
  port: number;
}

export interface AwsQuicksightDataSourceArgsParametersPostgresql {
  database: string;
  host: string;
  port: number;
}

export interface AwsQuicksightDataSourceArgsParametersPresto {
  catalog: string;
  host: string;
  port: number;
}

export interface AwsQuicksightDataSourceArgsParametersRds {
  database: string;
  instance_id: string;
}

export interface AwsQuicksightDataSourceArgsParametersRedshift {
  cluster_id?: string;
  database: string;
  host?: string;
  port?: number;
}

export interface AwsQuicksightDataSourceArgsParametersS3ManifestFileLocation {
  bucket: string;
  key: string;
}

export interface AwsQuicksightDataSourceArgsParametersS3 {
  manifest_file_location: AwsQuicksightDataSourceArgsParametersS3ManifestFileLocation;
}

export interface AwsQuicksightDataSourceArgsParametersServiceNow {
  site_base_url: string;
}

export interface AwsQuicksightDataSourceArgsParametersSnowflake {
  database: string;
  host: string;
  warehouse: string;
}

export interface AwsQuicksightDataSourceArgsParametersSpark {
  host: string;
  port: number;
}

export interface AwsQuicksightDataSourceArgsParametersSqlServer {
  database: string;
  host: string;
  port: number;
}

export interface AwsQuicksightDataSourceArgsParametersTeradata {
  database: string;
  host: string;
  port: number;
}

export interface AwsQuicksightDataSourceArgsParametersTwitter {
  max_rows: number;
  query: string;
}

export interface AwsQuicksightDataSourceArgsParameters {
  amazon_elasticsearch?: AwsQuicksightDataSourceArgsParametersAmazonElasticsearch;
  athena?: AwsQuicksightDataSourceArgsParametersAthena;
  aurora?: AwsQuicksightDataSourceArgsParametersAurora;
  aurora_postgresql?: AwsQuicksightDataSourceArgsParametersAuroraPostgresql;
  aws_iot_analytics?: AwsQuicksightDataSourceArgsParametersAwsIotAnalytics;
  databricks?: AwsQuicksightDataSourceArgsParametersDatabricks;
  jira?: AwsQuicksightDataSourceArgsParametersJira;
  maria_db?: AwsQuicksightDataSourceArgsParametersMariaDb;
  mysql?: AwsQuicksightDataSourceArgsParametersMysql;
  oracle?: AwsQuicksightDataSourceArgsParametersOracle;
  postgresql?: AwsQuicksightDataSourceArgsParametersPostgresql;
  presto?: AwsQuicksightDataSourceArgsParametersPresto;
  rds?: AwsQuicksightDataSourceArgsParametersRds;
  redshift?: AwsQuicksightDataSourceArgsParametersRedshift;
  s3?: AwsQuicksightDataSourceArgsParametersS3;
  service_now?: AwsQuicksightDataSourceArgsParametersServiceNow;
  snowflake?: AwsQuicksightDataSourceArgsParametersSnowflake;
  spark?: AwsQuicksightDataSourceArgsParametersSpark;
  sql_server?: AwsQuicksightDataSourceArgsParametersSqlServer;
  teradata?: AwsQuicksightDataSourceArgsParametersTeradata;
  twitter?: AwsQuicksightDataSourceArgsParametersTwitter;
}

export interface AwsQuicksightDataSourceArgsPermission {
  actions: string[];
  principal: string;
}

export interface AwsQuicksightDataSourceArgsSslProperties {
  disable_ssl: boolean;
}

export interface AwsQuicksightDataSourceArgsVpcConnectionProperties {
  vpc_connection_arn: string;
}

export interface AwsQuicksightDataSourceArgs {
  data_source_id: string;
  name: string;
  tags?: { [key: string]: string };
  type: string;
  credentials?: AwsQuicksightDataSourceArgsCredentials;
  parameters: AwsQuicksightDataSourceArgsParameters;
  permission?: AwsQuicksightDataSourceArgsPermission[];
  ssl_properties?: AwsQuicksightDataSourceArgsSslProperties;
  vpc_connection_properties?: AwsQuicksightDataSourceArgsVpcConnectionProperties;
}

export class aws_quicksight_data_source extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsQuicksightDataSourceArgs) {
    const meta = {credentials:{isBlock:true,credential_pair:{isBlock:true}},parameters:{isBlock:true,amazon_elasticsearch:{isBlock:true},athena:{isBlock:true},aurora:{isBlock:true},aurora_postgresql:{isBlock:true},aws_iot_analytics:{isBlock:true},databricks:{isBlock:true},jira:{isBlock:true},maria_db:{isBlock:true},mysql:{isBlock:true},oracle:{isBlock:true},postgresql:{isBlock:true},presto:{isBlock:true},rds:{isBlock:true},redshift:{isBlock:true},s3:{isBlock:true,manifest_file_location:{isBlock:true}},service_now:{isBlock:true},snowflake:{isBlock:true},spark:{isBlock:true},sql_server:{isBlock:true},teradata:{isBlock:true},twitter:{isBlock:true}},permission:{isBlock:true},ssl_properties:{isBlock:true},vpc_connection_properties:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_quicksight_data_source", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get aws_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.aws_account_id`;
  }

  get data_source_id(): string {
    return `${this.resourceType}.${this.resourceName}.data_source_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
