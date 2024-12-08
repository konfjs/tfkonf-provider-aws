import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudwatchEventTargetArgsAppsyncTarget {
  graphql_operation?: string;
}

export interface AwsCloudwatchEventTargetArgsBatchTarget {
  array_size?: number;
  job_attempts?: number;
  job_definition: string;
  job_name: string;
}

export interface AwsCloudwatchEventTargetArgsDeadLetterConfig {
  arn?: string;
}

export interface AwsCloudwatchEventTargetArgsEcsTargetCapacityProviderStrategy {
  base?: number;
  capacity_provider: string;
  weight?: number;
}

export interface AwsCloudwatchEventTargetArgsEcsTargetNetworkConfiguration {
  assign_public_ip?: boolean;
  security_groups?: string[];
  subnets: string[];
}

export interface AwsCloudwatchEventTargetArgsEcsTargetOrderedPlacementStrategy {
  field?: string;
  type: string;
}

export interface AwsCloudwatchEventTargetArgsEcsTargetPlacementConstraint {
  expression?: string;
  type: string;
}

export interface AwsCloudwatchEventTargetArgsEcsTarget {
  enable_ecs_managed_tags?: boolean;
  enable_execute_command?: boolean;
  group?: string;
  launch_type?: string;
  platform_version?: string;
  propagate_tags?: string;
  tags?: { [key: string]: string };
  task_count?: number;
  task_definition_arn: string;
  capacity_provider_strategy?: AwsCloudwatchEventTargetArgsEcsTargetCapacityProviderStrategy[];
  network_configuration?: AwsCloudwatchEventTargetArgsEcsTargetNetworkConfiguration;
  ordered_placement_strategy?: AwsCloudwatchEventTargetArgsEcsTargetOrderedPlacementStrategy[];
  placement_constraint?: AwsCloudwatchEventTargetArgsEcsTargetPlacementConstraint[];
}

export interface AwsCloudwatchEventTargetArgsHttpTarget {
  header_parameters?: { [key: string]: string };
  path_parameter_values?: string[];
  query_string_parameters?: { [key: string]: string };
}

export interface AwsCloudwatchEventTargetArgsInputTransformer {
  input_paths?: { [key: string]: string };
  input_template: string;
}

export interface AwsCloudwatchEventTargetArgsKinesisTarget {
  partition_key_path?: string;
}

export interface AwsCloudwatchEventTargetArgsRedshiftTarget {
  database: string;
  db_user?: string;
  secrets_manager_arn?: string;
  sql?: string;
  statement_name?: string;
  with_event?: boolean;
}

export interface AwsCloudwatchEventTargetArgsRetryPolicy {
  maximum_event_age_in_seconds?: number;
  maximum_retry_attempts?: number;
}

export interface AwsCloudwatchEventTargetArgsRunCommandTargets {
  key: string;
  values: string[];
}

export interface AwsCloudwatchEventTargetArgsSagemakerPipelineTargetPipelineParameterList {
  name: string;
  value: string;
}

export interface AwsCloudwatchEventTargetArgsSagemakerPipelineTarget {
  pipeline_parameter_list?: AwsCloudwatchEventTargetArgsSagemakerPipelineTargetPipelineParameterList[];
}

export interface AwsCloudwatchEventTargetArgsSqsTarget {
  message_group_id?: string;
}

export interface AwsCloudwatchEventTargetArgs {
  arn: string;
  event_bus_name?: string;
  force_destroy?: boolean;
  input?: string;
  input_path?: string;
  role_arn?: string;
  rule: string;
  appsync_target?: AwsCloudwatchEventTargetArgsAppsyncTarget;
  batch_target?: AwsCloudwatchEventTargetArgsBatchTarget;
  dead_letter_config?: AwsCloudwatchEventTargetArgsDeadLetterConfig;
  ecs_target?: AwsCloudwatchEventTargetArgsEcsTarget;
  http_target?: AwsCloudwatchEventTargetArgsHttpTarget;
  input_transformer?: AwsCloudwatchEventTargetArgsInputTransformer;
  kinesis_target?: AwsCloudwatchEventTargetArgsKinesisTarget;
  redshift_target?: AwsCloudwatchEventTargetArgsRedshiftTarget;
  retry_policy?: AwsCloudwatchEventTargetArgsRetryPolicy;
  run_command_targets?: AwsCloudwatchEventTargetArgsRunCommandTargets[];
  sagemaker_pipeline_target?: AwsCloudwatchEventTargetArgsSagemakerPipelineTarget;
  sqs_target?: AwsCloudwatchEventTargetArgsSqsTarget;
}

export class aws_cloudwatch_event_target extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCloudwatchEventTargetArgs) {
    const meta = {appsync_target:{isBlock:true},batch_target:{isBlock:true},dead_letter_config:{isBlock:true},ecs_target:{isBlock:true,capacity_provider_strategy:{isBlock:true},network_configuration:{isBlock:true},ordered_placement_strategy:{isBlock:true},placement_constraint:{isBlock:true}},http_target:{isBlock:true},input_transformer:{isBlock:true},kinesis_target:{isBlock:true},redshift_target:{isBlock:true},retry_policy:{isBlock:true},run_command_targets:{isBlock:true},sagemaker_pipeline_target:{isBlock:true,pipeline_parameter_list:{isBlock:true}},sqs_target:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_cloudwatch_event_target", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get rule(): string {
    return `${this.resourceType}.${this.resourceName}.rule`;
  }

  get target_id(): string {
    return `${this.resourceType}.${this.resourceName}.target_id`;
  }
}
