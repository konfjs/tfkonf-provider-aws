import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVerifiedaccessInstanceLoggingConfigurationArgsAccessLogsCloudwatchLogs {
  enabled: boolean;
  log_group?: string;
}

export interface AwsVerifiedaccessInstanceLoggingConfigurationArgsAccessLogsKinesisDataFirehose {
  delivery_stream?: string;
  enabled: boolean;
}

export interface AwsVerifiedaccessInstanceLoggingConfigurationArgsAccessLogsS3 {
  bucket_name?: string;
  enabled: boolean;
  prefix?: string;
}

export interface AwsVerifiedaccessInstanceLoggingConfigurationArgsAccessLogs {
  cloudwatch_logs?: AwsVerifiedaccessInstanceLoggingConfigurationArgsAccessLogsCloudwatchLogs;
  kinesis_data_firehose?: AwsVerifiedaccessInstanceLoggingConfigurationArgsAccessLogsKinesisDataFirehose;
  s3?: AwsVerifiedaccessInstanceLoggingConfigurationArgsAccessLogsS3;
}

export interface AwsVerifiedaccessInstanceLoggingConfigurationArgs {
  verifiedaccess_instance_id: string;
  access_logs: AwsVerifiedaccessInstanceLoggingConfigurationArgsAccessLogs;
}

export class aws_verifiedaccess_instance_logging_configuration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsVerifiedaccessInstanceLoggingConfigurationArgs) {
    const meta = {access_logs:{isBlock:true,cloudwatch_logs:{isBlock:true},kinesis_data_firehose:{isBlock:true},s3:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_verifiedaccess_instance_logging_configuration", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get verifiedaccess_instance_id(): string {
    return `${this.resourceType}.${this.resourceName}.verifiedaccess_instance_id`;
  }
}
