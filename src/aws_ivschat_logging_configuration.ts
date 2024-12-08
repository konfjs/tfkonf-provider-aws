import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIvschatLoggingConfigurationArgsDestinationConfigurationCloudwatchLogs {
  log_group_name: string;
}

export interface AwsIvschatLoggingConfigurationArgsDestinationConfigurationFirehose {
  delivery_stream_name: string;
}

export interface AwsIvschatLoggingConfigurationArgsDestinationConfigurationS3 {
  bucket_name: string;
}

export interface AwsIvschatLoggingConfigurationArgsDestinationConfiguration {
  cloudwatch_logs?: AwsIvschatLoggingConfigurationArgsDestinationConfigurationCloudwatchLogs;
  firehose?: AwsIvschatLoggingConfigurationArgsDestinationConfigurationFirehose;
  s3?: AwsIvschatLoggingConfigurationArgsDestinationConfigurationS3;
}

export interface AwsIvschatLoggingConfigurationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsIvschatLoggingConfigurationArgs {
  name?: string;
  tags?: { [key: string]: string };
  destination_configuration?: AwsIvschatLoggingConfigurationArgsDestinationConfiguration;
  timeouts?: AwsIvschatLoggingConfigurationArgsTimeouts;
}

export class aws_ivschat_logging_configuration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsIvschatLoggingConfigurationArgs) {
    const meta = {destination_configuration:{isBlock:true,cloudwatch_logs:{isBlock:true},firehose:{isBlock:true},s3:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ivschat_logging_configuration", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
