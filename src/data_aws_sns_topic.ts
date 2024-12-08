import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSnsTopicArgs {
  name: string;
}

export class data_aws_sns_topic extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsSnsTopicArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_sns_topic", resourceName);
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
}
