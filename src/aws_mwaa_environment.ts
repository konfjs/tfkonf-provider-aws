import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMwaaEnvironmentArgsLoggingConfigurationDagProcessingLogs {
}

export interface AwsMwaaEnvironmentArgsLoggingConfigurationSchedulerLogs {
}

export interface AwsMwaaEnvironmentArgsLoggingConfigurationTaskLogs {
}

export interface AwsMwaaEnvironmentArgsLoggingConfigurationWebserverLogs {
}

export interface AwsMwaaEnvironmentArgsLoggingConfigurationWorkerLogs {
}

export interface AwsMwaaEnvironmentArgsLoggingConfiguration {
  dag_processing_logs?: AwsMwaaEnvironmentArgsLoggingConfigurationDagProcessingLogs;
  scheduler_logs?: AwsMwaaEnvironmentArgsLoggingConfigurationSchedulerLogs;
  task_logs?: AwsMwaaEnvironmentArgsLoggingConfigurationTaskLogs;
  webserver_logs?: AwsMwaaEnvironmentArgsLoggingConfigurationWebserverLogs;
  worker_logs?: AwsMwaaEnvironmentArgsLoggingConfigurationWorkerLogs;
}

export interface AwsMwaaEnvironmentArgsNetworkConfiguration {
  security_group_ids: string[];
  subnet_ids: string[];
}

export interface AwsMwaaEnvironmentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsMwaaEnvironmentArgs {
  airflow_configuration_options?: { [key: string]: string };
  dag_s3_path: string;
  execution_role_arn: string;
  kms_key?: string;
  name: string;
  plugins_s3_path?: string;
  requirements_s3_path?: string;
  source_bucket_arn: string;
  startup_script_s3_path?: string;
  tags?: { [key: string]: string };
  logging_configuration?: AwsMwaaEnvironmentArgsLoggingConfiguration;
  network_configuration: AwsMwaaEnvironmentArgsNetworkConfiguration;
  timeouts?: AwsMwaaEnvironmentArgsTimeouts;
}

export class aws_mwaa_environment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsMwaaEnvironmentArgs) {
    const meta = {logging_configuration:{isBlock:true,dag_processing_logs:{isBlock:true},scheduler_logs:{isBlock:true},task_logs:{isBlock:true},webserver_logs:{isBlock:true},worker_logs:{isBlock:true}},network_configuration:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_mwaa_environment", resourceName);
  }

  get airflow_version(): string {
    return `${this.resourceType}.${this.resourceName}.airflow_version`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_at(): string {
    return `${this.resourceType}.${this.resourceName}.created_at`;
  }

  get dag_s3_path(): string {
    return `${this.resourceType}.${this.resourceName}.dag_s3_path`;
  }

  get database_vpc_endpoint_service(): string {
    return `${this.resourceType}.${this.resourceName}.database_vpc_endpoint_service`;
  }

  get endpoint_management(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint_management`;
  }

  get environment_class(): string {
    return `${this.resourceType}.${this.resourceName}.environment_class`;
  }

  get execution_role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.execution_role_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_updated(): string {
    return `${this.resourceType}.${this.resourceName}.last_updated`;
  }

  get max_webservers(): string {
    return `${this.resourceType}.${this.resourceName}.max_webservers`;
  }

  get max_workers(): string {
    return `${this.resourceType}.${this.resourceName}.max_workers`;
  }

  get min_webservers(): string {
    return `${this.resourceType}.${this.resourceName}.min_webservers`;
  }

  get min_workers(): string {
    return `${this.resourceType}.${this.resourceName}.min_workers`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get plugins_s3_object_version(): string {
    return `${this.resourceType}.${this.resourceName}.plugins_s3_object_version`;
  }

  get requirements_s3_object_version(): string {
    return `${this.resourceType}.${this.resourceName}.requirements_s3_object_version`;
  }

  get schedulers(): string {
    return `${this.resourceType}.${this.resourceName}.schedulers`;
  }

  get service_role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.service_role_arn`;
  }

  get source_bucket_arn(): string {
    return `${this.resourceType}.${this.resourceName}.source_bucket_arn`;
  }

  get startup_script_s3_object_version(): string {
    return `${this.resourceType}.${this.resourceName}.startup_script_s3_object_version`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get webserver_access_mode(): string {
    return `${this.resourceType}.${this.resourceName}.webserver_access_mode`;
  }

  get webserver_url(): string {
    return `${this.resourceType}.${this.resourceName}.webserver_url`;
  }

  get webserver_vpc_endpoint_service(): string {
    return `${this.resourceType}.${this.resourceName}.webserver_vpc_endpoint_service`;
  }

  get weekly_maintenance_window_start(): string {
    return `${this.resourceType}.${this.resourceName}.weekly_maintenance_window_start`;
  }
}
