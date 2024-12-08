import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsKinesisStreamArgs {
  name: string;
}

export class data_aws_kinesis_stream extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsKinesisStreamArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_kinesis_stream", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get closed_shards(): string {
    return `data.${this.resourceType}.${this.resourceName}.closed_shards`;
  }

  get creation_timestamp(): string {
    return `data.${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get encryption_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.encryption_type`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get open_shards(): string {
    return `data.${this.resourceType}.${this.resourceName}.open_shards`;
  }

  get retention_period(): string {
    return `data.${this.resourceType}.${this.resourceName}.retention_period`;
  }

  get shard_level_metrics(): string {
    return `data.${this.resourceType}.${this.resourceName}.shard_level_metrics`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get stream_mode_details(): string {
    return `data.${this.resourceType}.${this.resourceName}.stream_mode_details`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
