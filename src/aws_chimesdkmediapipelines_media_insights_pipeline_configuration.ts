import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings {
  content_redaction_output?: string;
  data_access_role_arn: string;
  output_encryption_kms_key_id?: string;
  output_location: string;
}

export interface AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsElementsAmazonTranscribeCallAnalyticsProcessorConfiguration {
  call_analytics_stream_categories?: string[];
  content_identification_type?: string;
  content_redaction_type?: string;
  enable_partial_results_stabilization?: boolean;
  filter_partial_results?: boolean;
  language_code: string;
  language_model_name?: string;
  partial_results_stability?: string;
  pii_entity_types?: string;
  vocabulary_filter_method?: string;
  vocabulary_filter_name?: string;
  vocabulary_name?: string;
  post_call_analytics_settings?: AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings;
}

export interface AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsElementsAmazonTranscribeProcessorConfiguration {
  content_identification_type?: string;
  content_redaction_type?: string;
  enable_partial_results_stabilization?: boolean;
  filter_partial_results?: boolean;
  language_code: string;
  language_model_name?: string;
  partial_results_stability?: string;
  pii_entity_types?: string;
  show_speaker_label?: boolean;
  vocabulary_filter_method?: string;
  vocabulary_filter_name?: string;
  vocabulary_name?: string;
}

export interface AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsElementsKinesisDataStreamSinkConfiguration {
  insights_target: string;
}

export interface AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsElementsLambdaFunctionSinkConfiguration {
  insights_target: string;
}

export interface AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsElementsS3RecordingSinkConfiguration {
  destination?: string;
}

export interface AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsElementsSnsTopicSinkConfiguration {
  insights_target: string;
}

export interface AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsElementsSqsQueueSinkConfiguration {
  insights_target: string;
}

export interface AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsElementsVoiceAnalyticsProcessorConfiguration {
  speaker_search_status: string;
  voice_tone_analysis_status: string;
}

export interface AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsElements {
  type: string;
  amazon_transcribe_call_analytics_processor_configuration?: AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsElementsAmazonTranscribeCallAnalyticsProcessorConfiguration;
  amazon_transcribe_processor_configuration?: AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsElementsAmazonTranscribeProcessorConfiguration;
  kinesis_data_stream_sink_configuration?: AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsElementsKinesisDataStreamSinkConfiguration;
  lambda_function_sink_configuration?: AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsElementsLambdaFunctionSinkConfiguration;
  s3_recording_sink_configuration?: AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsElementsS3RecordingSinkConfiguration;
  sns_topic_sink_configuration?: AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsElementsSnsTopicSinkConfiguration;
  sqs_queue_sink_configuration?: AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsElementsSqsQueueSinkConfiguration;
  voice_analytics_processor_configuration?: AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsElementsVoiceAnalyticsProcessorConfiguration;
}

export interface AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsRealTimeAlertConfigurationRulesIssueDetectionConfiguration {
  rule_name: string;
}

export interface AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsRealTimeAlertConfigurationRulesKeywordMatchConfiguration {
  keywords: string[];
  rule_name: string;
}

export interface AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsRealTimeAlertConfigurationRulesSentimentConfiguration {
  rule_name: string;
  sentiment_type: string;
  time_period: number;
}

export interface AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsRealTimeAlertConfigurationRules {
  type: string;
  issue_detection_configuration?: AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsRealTimeAlertConfigurationRulesIssueDetectionConfiguration;
  keyword_match_configuration?: AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsRealTimeAlertConfigurationRulesKeywordMatchConfiguration;
  sentiment_configuration?: AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsRealTimeAlertConfigurationRulesSentimentConfiguration;
}

export interface AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsRealTimeAlertConfiguration {
  rules: AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsRealTimeAlertConfigurationRules[];
}

export interface AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgs {
  name: string;
  resource_access_role_arn: string;
  tags?: { [key: string]: string };
  elements: AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsElements[];
  real_time_alert_configuration?: AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsRealTimeAlertConfiguration;
  timeouts?: AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsTimeouts;
}

export class aws_chimesdkmediapipelines_media_insights_pipeline_configuration extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgs) {
    const meta = {elements:{isBlock:true,amazon_transcribe_call_analytics_processor_configuration:{isBlock:true,post_call_analytics_settings:{isBlock:true}},amazon_transcribe_processor_configuration:{isBlock:true},kinesis_data_stream_sink_configuration:{isBlock:true},lambda_function_sink_configuration:{isBlock:true},s3_recording_sink_configuration:{isBlock:true},sns_topic_sink_configuration:{isBlock:true},sqs_queue_sink_configuration:{isBlock:true},voice_analytics_processor_configuration:{isBlock:true}},real_time_alert_configuration:{isBlock:true,rules:{isBlock:true,issue_detection_configuration:{isBlock:true},keyword_match_configuration:{isBlock:true},sentiment_configuration:{isBlock:true}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_chimesdkmediapipelines_media_insights_pipeline_configuration", resourceName);
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

  get resource_access_role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.resource_access_role_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
