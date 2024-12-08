import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudfrontRealtimeLogConfigArgsEndpointKinesisStreamConfig {
  role_arn: string;
  stream_arn: string;
}

export interface AwsCloudfrontRealtimeLogConfigArgsEndpoint {
  stream_type: string;
  kinesis_stream_config: AwsCloudfrontRealtimeLogConfigArgsEndpointKinesisStreamConfig;
}

export interface AwsCloudfrontRealtimeLogConfigArgs {
  fields: string[];
  name: string;
  sampling_rate: number;
  endpoint: AwsCloudfrontRealtimeLogConfigArgsEndpoint;
}

export class aws_cloudfront_realtime_log_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCloudfrontRealtimeLogConfigArgs) {
    const meta = {endpoint:{isBlock:true,kinesis_stream_config:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_cloudfront_realtime_log_config", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get fields(): string {
    return `${this.resourceType}.${this.resourceName}.fields`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get sampling_rate(): string {
    return `${this.resourceType}.${this.resourceName}.sampling_rate`;
  }
}
