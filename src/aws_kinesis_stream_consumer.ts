import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsKinesisStreamConsumerArgs {
  name: string;
  stream_arn: string;
}

export class aws_kinesis_stream_consumer extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsKinesisStreamConsumerArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_kinesis_stream_consumer", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get creation_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get stream_arn(): string {
    return `${this.resourceType}.${this.resourceName}.stream_arn`;
  }
}
