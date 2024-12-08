import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCloudwatchEventBusArgs {
  name: string;
}

export class data_aws_cloudwatch_event_bus extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsCloudwatchEventBusArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_cloudwatch_event_bus", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_identifier(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_identifier`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }
}
