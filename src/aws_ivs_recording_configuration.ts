import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIvsRecordingConfigurationArgsDestinationConfigurationS3 {
  bucket_name: string;
}

export interface AwsIvsRecordingConfigurationArgsDestinationConfiguration {
  s3: AwsIvsRecordingConfigurationArgsDestinationConfigurationS3;
}

export interface AwsIvsRecordingConfigurationArgsThumbnailConfiguration {
}

export interface AwsIvsRecordingConfigurationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsIvsRecordingConfigurationArgs {
  tags?: { [key: string]: string };
  destination_configuration: AwsIvsRecordingConfigurationArgsDestinationConfiguration;
  thumbnail_configuration?: AwsIvsRecordingConfigurationArgsThumbnailConfiguration;
  timeouts?: AwsIvsRecordingConfigurationArgsTimeouts;
}

export class aws_ivs_recording_configuration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsIvsRecordingConfigurationArgs) {
    const meta = {destination_configuration:{isBlock:true,s3:{isBlock:true}},thumbnail_configuration:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ivs_recording_configuration", resourceName);
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

  get recording_reconnect_window_seconds(): string {
    return `${this.resourceType}.${this.resourceName}.recording_reconnect_window_seconds`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
