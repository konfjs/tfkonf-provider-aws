import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSqsQueueArgs {
  name: string;
}

export class data_aws_sqs_queue extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsSqsQueueArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_sqs_queue", resourceName);
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

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get url(): string {
    return `data.${this.resourceType}.${this.resourceName}.url`;
  }
}
