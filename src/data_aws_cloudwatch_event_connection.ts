import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCloudwatchEventConnectionArgs {
  name: string;
}

export class data_aws_cloudwatch_event_connection extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsCloudwatchEventConnectionArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_cloudwatch_event_connection", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get authorization_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.authorization_type`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get secret_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.secret_arn`;
  }
}
