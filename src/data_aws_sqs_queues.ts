import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSqsQueuesArgs {
  queue_name_prefix?: string;
}

export class data_aws_sqs_queues extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsSqsQueuesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_sqs_queues", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get queue_urls(): string {
    return `data.${this.resourceType}.${this.resourceName}.queue_urls`;
  }
}
