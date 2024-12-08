import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEmrcontainersJobTemplateArgsJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations {
  classification?: string;
  properties?: { [key: string]: string };
}

export interface AwsEmrcontainersJobTemplateArgsJobTemplateDataConfigurationOverridesApplicationConfiguration {
  classification: string;
  properties?: { [key: string]: string };
  configurations?: AwsEmrcontainersJobTemplateArgsJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations[];
}

export interface AwsEmrcontainersJobTemplateArgsJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration {
  log_group_name: string;
  log_stream_name_prefix?: string;
}

export interface AwsEmrcontainersJobTemplateArgsJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration {
  log_uri: string;
}

export interface AwsEmrcontainersJobTemplateArgsJobTemplateDataConfigurationOverridesMonitoringConfiguration {
  persistent_app_ui?: string;
  cloud_watch_monitoring_configuration?: AwsEmrcontainersJobTemplateArgsJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration;
  s3_monitoring_configuration?: AwsEmrcontainersJobTemplateArgsJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration;
}

export interface AwsEmrcontainersJobTemplateArgsJobTemplateDataConfigurationOverrides {
  application_configuration?: AwsEmrcontainersJobTemplateArgsJobTemplateDataConfigurationOverridesApplicationConfiguration[];
  monitoring_configuration?: AwsEmrcontainersJobTemplateArgsJobTemplateDataConfigurationOverridesMonitoringConfiguration;
}

export interface AwsEmrcontainersJobTemplateArgsJobTemplateDataJobDriverSparkSqlJobDriver {
  entry_point?: string;
  spark_sql_parameters?: string;
}

export interface AwsEmrcontainersJobTemplateArgsJobTemplateDataJobDriverSparkSubmitJobDriver {
  entry_point: string;
  entry_point_arguments?: string[];
  spark_submit_parameters?: string;
}

export interface AwsEmrcontainersJobTemplateArgsJobTemplateDataJobDriver {
  spark_sql_job_driver?: AwsEmrcontainersJobTemplateArgsJobTemplateDataJobDriverSparkSqlJobDriver;
  spark_submit_job_driver?: AwsEmrcontainersJobTemplateArgsJobTemplateDataJobDriverSparkSubmitJobDriver;
}

export interface AwsEmrcontainersJobTemplateArgsJobTemplateData {
  execution_role_arn: string;
  job_tags?: { [key: string]: string };
  release_label: string;
  configuration_overrides?: AwsEmrcontainersJobTemplateArgsJobTemplateDataConfigurationOverrides;
  job_driver: AwsEmrcontainersJobTemplateArgsJobTemplateDataJobDriver;
}

export interface AwsEmrcontainersJobTemplateArgsTimeouts {
  delete?: string;
}

export interface AwsEmrcontainersJobTemplateArgs {
  kms_key_arn?: string;
  name: string;
  tags?: { [key: string]: string };
  job_template_data: AwsEmrcontainersJobTemplateArgsJobTemplateData;
  timeouts?: AwsEmrcontainersJobTemplateArgsTimeouts;
}

export class aws_emrcontainers_job_template extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEmrcontainersJobTemplateArgs) {
    const meta = {job_template_data:{isBlock:true,configuration_overrides:{isBlock:true,application_configuration:{isBlock:true,configurations:{isBlock:true}},monitoring_configuration:{isBlock:true,cloud_watch_monitoring_configuration:{isBlock:true},s3_monitoring_configuration:{isBlock:true}}},job_driver:{isBlock:true,spark_sql_job_driver:{isBlock:true},spark_submit_job_driver:{isBlock:true}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_emrcontainers_job_template", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
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
}
