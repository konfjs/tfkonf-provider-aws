import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsKinesisStreamConsumerArgs {
  stream_arn: string;
}

export class data_aws_kinesis_stream_consumer extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsKinesisStreamConsumerArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_kinesis_stream_consumer", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get creation_timestamp(): string {
    return `data.${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get stream_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.stream_arn`;
  }
}
