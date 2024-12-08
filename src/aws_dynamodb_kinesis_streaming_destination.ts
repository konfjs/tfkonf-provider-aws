import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDynamodbKinesisStreamingDestinationArgs {
  stream_arn: string;
  table_name: string;
}

export class aws_dynamodb_kinesis_streaming_destination extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDynamodbKinesisStreamingDestinationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_dynamodb_kinesis_streaming_destination", resourceName);
  }

  get approximate_creation_date_time_precision(): string {
    return `${this.resourceType}.${this.resourceName}.approximate_creation_date_time_precision`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get stream_arn(): string {
    return `${this.resourceType}.${this.resourceName}.stream_arn`;
  }

  get table_name(): string {
    return `${this.resourceType}.${this.resourceName}.table_name`;
  }
}
