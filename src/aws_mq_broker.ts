import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMqBrokerArgsConfiguration {
}

export interface AwsMqBrokerArgsEncryptionOptions {
  use_aws_owned_key?: boolean;
}

export interface AwsMqBrokerArgsLdapServerMetadata {
  hosts?: string[];
  role_base?: string;
  role_name?: string;
  role_search_matching?: string;
  role_search_subtree?: boolean;
  service_account_password?: string;
  service_account_username?: string;
  user_base?: string;
  user_role_name?: string;
  user_search_matching?: string;
  user_search_subtree?: boolean;
}

export interface AwsMqBrokerArgsLogs {
  audit?: string;
  general?: boolean;
}

export interface AwsMqBrokerArgsMaintenanceWindowStartTime {
  day_of_week: string;
  time_of_day: string;
  time_zone: string;
}

export interface AwsMqBrokerArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsMqBrokerArgsUser {
  console_access?: boolean;
  groups?: string[];
  password: string;
  replication_user?: boolean;
  username: string;
}

export interface AwsMqBrokerArgs {
  apply_immediately?: boolean;
  auto_minor_version_upgrade?: boolean;
  broker_name: string;
  data_replication_primary_broker_arn?: string;
  deployment_mode?: string;
  engine_type: string;
  engine_version: string;
  host_instance_type: string;
  publicly_accessible?: boolean;
  security_groups?: string[];
  tags?: { [key: string]: string };
  configuration?: AwsMqBrokerArgsConfiguration;
  encryption_options?: AwsMqBrokerArgsEncryptionOptions;
  ldap_server_metadata?: AwsMqBrokerArgsLdapServerMetadata;
  logs?: AwsMqBrokerArgsLogs;
  maintenance_window_start_time?: AwsMqBrokerArgsMaintenanceWindowStartTime;
  timeouts?: AwsMqBrokerArgsTimeouts;
  user: AwsMqBrokerArgsUser[];
}

export class aws_mq_broker extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsMqBrokerArgs) {
    const meta = {configuration:{isBlock:true},encryption_options:{isBlock:true},ldap_server_metadata:{isBlock:true},logs:{isBlock:true},maintenance_window_start_time:{isBlock:true},timeouts:{isBlock:true},user:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_mq_broker", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get authentication_strategy(): string {
    return `${this.resourceType}.${this.resourceName}.authentication_strategy`;
  }

  get broker_name(): string {
    return `${this.resourceType}.${this.resourceName}.broker_name`;
  }

  get data_replication_mode(): string {
    return `${this.resourceType}.${this.resourceName}.data_replication_mode`;
  }

  get engine_type(): string {
    return `${this.resourceType}.${this.resourceName}.engine_type`;
  }

  get engine_version(): string {
    return `${this.resourceType}.${this.resourceName}.engine_version`;
  }

  get host_instance_type(): string {
    return `${this.resourceType}.${this.resourceName}.host_instance_type`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instances(): string {
    return `${this.resourceType}.${this.resourceName}.instances`;
  }

  get pending_data_replication_mode(): string {
    return `${this.resourceType}.${this.resourceName}.pending_data_replication_mode`;
  }

  get storage_type(): string {
    return `${this.resourceType}.${this.resourceName}.storage_type`;
  }

  get subnet_ids(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_ids`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
