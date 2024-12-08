import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudwatchLogStreamArgs {
  log_group_name: string;
  name: string;
}

export class aws_cloudwatch_log_stream extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCloudwatchLogStreamArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_cloudwatch_log_stream", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get log_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.log_group_name`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
