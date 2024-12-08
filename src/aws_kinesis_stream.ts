import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsKinesisStreamArgsStreamModeDetails {
  stream_mode: string;
}

export interface AwsKinesisStreamArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsKinesisStreamArgs {
  encryption_type?: string;
  enforce_consumer_deletion?: boolean;
  kms_key_id?: string;
  name: string;
  retention_period?: number;
  shard_count?: number;
  shard_level_metrics?: string[];
  tags?: { [key: string]: string };
  stream_mode_details?: AwsKinesisStreamArgsStreamModeDetails;
  timeouts?: AwsKinesisStreamArgsTimeouts;
}

export class aws_kinesis_stream extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsKinesisStreamArgs) {
    const meta = {stream_mode_details:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_kinesis_stream", resourceName);
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
