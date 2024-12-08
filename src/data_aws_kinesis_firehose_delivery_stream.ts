import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsKinesisFirehoseDeliveryStreamArgs {
  name: string;
}

export class data_aws_kinesis_firehose_delivery_stream extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsKinesisFirehoseDeliveryStreamArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_kinesis_firehose_delivery_stream", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }
}
