import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLambdaEventSourceMappingArgsAmazonManagedKafkaEventSourceConfig {
}

export interface AwsLambdaEventSourceMappingArgsDestinationConfigOnFailure {
  destination_arn: string;
}

export interface AwsLambdaEventSourceMappingArgsDestinationConfig {
  on_failure?: AwsLambdaEventSourceMappingArgsDestinationConfigOnFailure;
}

export interface AwsLambdaEventSourceMappingArgsDocumentDbEventSourceConfig {
  collection_name?: string;
  database_name: string;
  full_document?: string;
}

export interface AwsLambdaEventSourceMappingArgsFilterCriteriaFilter {
  pattern?: string;
}

export interface AwsLambdaEventSourceMappingArgsFilterCriteria {
  filter?: AwsLambdaEventSourceMappingArgsFilterCriteriaFilter[];
}

export interface AwsLambdaEventSourceMappingArgsScalingConfig {
  maximum_concurrency?: number;
}

export interface AwsLambdaEventSourceMappingArgsSelfManagedEventSource {
  endpoints: { [key: string]: string };
}

export interface AwsLambdaEventSourceMappingArgsSelfManagedKafkaEventSourceConfig {
}

export interface AwsLambdaEventSourceMappingArgsSourceAccessConfiguration {
  type: string;
  uri: string;
}

export interface AwsLambdaEventSourceMappingArgs {
  batch_size?: number;
  bisect_batch_on_function_error?: boolean;
  enabled?: boolean;
  event_source_arn?: string;
  function_name: string;
  function_response_types?: string[];
  kms_key_arn?: string;
  maximum_batching_window_in_seconds?: number;
  queues?: string[];
  starting_position?: string;
  starting_position_timestamp?: string;
  tags?: { [key: string]: string };
  topics?: string[];
  tumbling_window_in_seconds?: number;
  amazon_managed_kafka_event_source_config?: AwsLambdaEventSourceMappingArgsAmazonManagedKafkaEventSourceConfig;
  destination_config?: AwsLambdaEventSourceMappingArgsDestinationConfig;
  document_db_event_source_config?: AwsLambdaEventSourceMappingArgsDocumentDbEventSourceConfig;
  filter_criteria?: AwsLambdaEventSourceMappingArgsFilterCriteria;
  scaling_config?: AwsLambdaEventSourceMappingArgsScalingConfig;
  self_managed_event_source?: AwsLambdaEventSourceMappingArgsSelfManagedEventSource;
  self_managed_kafka_event_source_config?: AwsLambdaEventSourceMappingArgsSelfManagedKafkaEventSourceConfig;
  source_access_configuration?: AwsLambdaEventSourceMappingArgsSourceAccessConfiguration[];
}

export class aws_lambda_event_source_mapping extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsLambdaEventSourceMappingArgs) {
    const meta = {amazon_managed_kafka_event_source_config:{isBlock:true},destination_config:{isBlock:true,on_failure:{isBlock:true}},document_db_event_source_config:{isBlock:true},filter_criteria:{isBlock:true,filter:{isBlock:true}},scaling_config:{isBlock:true},self_managed_event_source:{isBlock:true},self_managed_kafka_event_source_config:{isBlock:true},source_access_configuration:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_lambda_event_source_mapping", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get function_arn(): string {
    return `${this.resourceType}.${this.resourceName}.function_arn`;
  }

  get function_name(): string {
    return `${this.resourceType}.${this.resourceName}.function_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_modified(): string {
    return `${this.resourceType}.${this.resourceName}.last_modified`;
  }

  get last_processing_result(): string {
    return `${this.resourceType}.${this.resourceName}.last_processing_result`;
  }

  get maximum_record_age_in_seconds(): string {
    return `${this.resourceType}.${this.resourceName}.maximum_record_age_in_seconds`;
  }

  get maximum_retry_attempts(): string {
    return `${this.resourceType}.${this.resourceName}.maximum_retry_attempts`;
  }

  get parallelization_factor(): string {
    return `${this.resourceType}.${this.resourceName}.parallelization_factor`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get state_transition_reason(): string {
    return `${this.resourceType}.${this.resourceName}.state_transition_reason`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get uuid(): string {
    return `${this.resourceType}.${this.resourceName}.uuid`;
  }
}
