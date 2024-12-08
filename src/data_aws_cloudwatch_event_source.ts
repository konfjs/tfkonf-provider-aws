import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCloudwatchEventSourceArgs {
  name_prefix?: string;
}

export class data_aws_cloudwatch_event_source extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsCloudwatchEventSourceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_cloudwatch_event_source", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_by(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_by`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }
}
