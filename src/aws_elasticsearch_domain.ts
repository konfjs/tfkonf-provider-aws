import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsElasticsearchDomainArgsAdvancedSecurityOptionsMasterUserOptions {
  master_user_arn?: string;
  master_user_name?: string;
  master_user_password?: string;
}

export interface AwsElasticsearchDomainArgsAdvancedSecurityOptions {
  enabled: boolean;
  internal_user_database_enabled?: boolean;
  master_user_options?: AwsElasticsearchDomainArgsAdvancedSecurityOptionsMasterUserOptions;
}

export interface AwsElasticsearchDomainArgsAutoTuneOptionsMaintenanceScheduleDuration {
  unit: string;
  value: number;
}

export interface AwsElasticsearchDomainArgsAutoTuneOptionsMaintenanceSchedule {
  cron_expression_for_recurrence: string;
  start_at: string;
  duration: AwsElasticsearchDomainArgsAutoTuneOptionsMaintenanceScheduleDuration;
}

export interface AwsElasticsearchDomainArgsAutoTuneOptions {
  desired_state: string;
  maintenance_schedule?: AwsElasticsearchDomainArgsAutoTuneOptionsMaintenanceSchedule[];
}

export interface AwsElasticsearchDomainArgsClusterConfigColdStorageOptions {
}

export interface AwsElasticsearchDomainArgsClusterConfigZoneAwarenessConfig {
  availability_zone_count?: number;
}

export interface AwsElasticsearchDomainArgsClusterConfig {
  dedicated_master_count?: number;
  dedicated_master_enabled?: boolean;
  dedicated_master_type?: string;
  instance_count?: number;
  instance_type?: string;
  warm_count?: number;
  warm_enabled?: boolean;
  warm_type?: string;
  zone_awareness_enabled?: boolean;
  cold_storage_options?: AwsElasticsearchDomainArgsClusterConfigColdStorageOptions;
  zone_awareness_config?: AwsElasticsearchDomainArgsClusterConfigZoneAwarenessConfig;
}

export interface AwsElasticsearchDomainArgsCognitoOptions {
  enabled?: boolean;
  identity_pool_id: string;
  role_arn: string;
  user_pool_id: string;
}

export interface AwsElasticsearchDomainArgsDomainEndpointOptions {
  custom_endpoint?: string;
  custom_endpoint_certificate_arn?: string;
  custom_endpoint_enabled?: boolean;
  enforce_https?: boolean;
}

export interface AwsElasticsearchDomainArgsEbsOptions {
  ebs_enabled: boolean;
  volume_size?: number;
}

export interface AwsElasticsearchDomainArgsEncryptAtRest {
  enabled: boolean;
}

export interface AwsElasticsearchDomainArgsLogPublishingOptions {
  cloudwatch_log_group_arn: string;
  enabled?: boolean;
  log_type: string;
}

export interface AwsElasticsearchDomainArgsNodeToNodeEncryption {
  enabled: boolean;
}

export interface AwsElasticsearchDomainArgsSnapshotOptions {
  automated_snapshot_start_hour: number;
}

export interface AwsElasticsearchDomainArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsElasticsearchDomainArgsVpcOptions {
  security_group_ids?: string[];
  subnet_ids?: string[];
}

export interface AwsElasticsearchDomainArgs {
  domain_name: string;
  elasticsearch_version?: string;
  tags?: { [key: string]: string };
  advanced_security_options?: AwsElasticsearchDomainArgsAdvancedSecurityOptions;
  auto_tune_options?: AwsElasticsearchDomainArgsAutoTuneOptions;
  cluster_config?: AwsElasticsearchDomainArgsClusterConfig;
  cognito_options?: AwsElasticsearchDomainArgsCognitoOptions;
  domain_endpoint_options?: AwsElasticsearchDomainArgsDomainEndpointOptions;
  ebs_options?: AwsElasticsearchDomainArgsEbsOptions;
  encrypt_at_rest?: AwsElasticsearchDomainArgsEncryptAtRest;
  log_publishing_options?: AwsElasticsearchDomainArgsLogPublishingOptions[];
  node_to_node_encryption?: AwsElasticsearchDomainArgsNodeToNodeEncryption;
  snapshot_options?: AwsElasticsearchDomainArgsSnapshotOptions;
  timeouts?: AwsElasticsearchDomainArgsTimeouts;
  vpc_options?: AwsElasticsearchDomainArgsVpcOptions;
}

export class aws_elasticsearch_domain extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsElasticsearchDomainArgs) {
    const meta = {advanced_security_options:{isBlock:true,master_user_options:{isBlock:true}},auto_tune_options:{isBlock:true,maintenance_schedule:{isBlock:true,duration:{isBlock:true}}},cluster_config:{isBlock:true,cold_storage_options:{isBlock:true},zone_awareness_config:{isBlock:true}},cognito_options:{isBlock:true},domain_endpoint_options:{isBlock:true},ebs_options:{isBlock:true},encrypt_at_rest:{isBlock:true},log_publishing_options:{isBlock:true},node_to_node_encryption:{isBlock:true},snapshot_options:{isBlock:true},timeouts:{isBlock:true},vpc_options:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_elasticsearch_domain", resourceName);
  }

  get access_policies(): string {
    return `${this.resourceType}.${this.resourceName}.access_policies`;
  }

  get advanced_options(): string {
    return `${this.resourceType}.${this.resourceName}.advanced_options`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get domain_id(): string {
    return `${this.resourceType}.${this.resourceName}.domain_id`;
  }

  get domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kibana_endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.kibana_endpoint`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
