import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsKinesisVideoStreamArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsKinesisVideoStreamArgs {
  data_retention_in_hours?: number;
  device_name?: string;
  media_type?: string;
  name: string;
  tags?: { [key: string]: string };
  timeouts?: AwsKinesisVideoStreamArgsTimeouts;
}

export class aws_kinesis_video_stream extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsKinesisVideoStreamArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_kinesis_video_stream", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get creation_time(): string {
    return `${this.resourceType}.${this.resourceName}.creation_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
