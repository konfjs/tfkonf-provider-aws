import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOsisPipelineArgsBufferOptions {
  persistent_buffer_enabled: boolean;
}

export interface AwsOsisPipelineArgsEncryptionAtRestOptions {
  kms_key_arn: string;
}

export interface AwsOsisPipelineArgsLogPublishingOptionsCloudwatchLogDestination {
  log_group: string;
}

export interface AwsOsisPipelineArgsLogPublishingOptions {
  is_logging_enabled?: boolean;
  cloudwatch_log_destination?: AwsOsisPipelineArgsLogPublishingOptionsCloudwatchLogDestination[];
}

export interface AwsOsisPipelineArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsOsisPipelineArgsVpcOptions {
  security_group_ids?: string[];
  subnet_ids: string[];
}

export interface AwsOsisPipelineArgs {
  max_units: number;
  min_units: number;
  pipeline_configuration_body: string;
  pipeline_name: string;
  tags?: { [key: string]: string };
  buffer_options?: AwsOsisPipelineArgsBufferOptions[];
  encryption_at_rest_options?: AwsOsisPipelineArgsEncryptionAtRestOptions[];
  log_publishing_options?: AwsOsisPipelineArgsLogPublishingOptions[];
  timeouts?: AwsOsisPipelineArgsTimeouts;
  vpc_options?: AwsOsisPipelineArgsVpcOptions[];
}

export class aws_osis_pipeline extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsOsisPipelineArgs) {
    const meta = {buffer_options:{isBlock:true},encryption_at_rest_options:{isBlock:true},log_publishing_options:{isBlock:true,cloudwatch_log_destination:{isBlock:true}},timeouts:{isBlock:true},vpc_options:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_osis_pipeline", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ingest_endpoint_urls(): string {
    return `${this.resourceType}.${this.resourceName}.ingest_endpoint_urls`;
  }

  get max_units(): string {
    return `${this.resourceType}.${this.resourceName}.max_units`;
  }

  get min_units(): string {
    return `${this.resourceType}.${this.resourceName}.min_units`;
  }

  get pipeline_arn(): string {
    return `${this.resourceType}.${this.resourceName}.pipeline_arn`;
  }

  get pipeline_configuration_body(): string {
    return `${this.resourceType}.${this.resourceName}.pipeline_configuration_body`;
  }

  get pipeline_name(): string {
    return `${this.resourceType}.${this.resourceName}.pipeline_name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
