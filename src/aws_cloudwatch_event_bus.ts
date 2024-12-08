import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudwatchEventBusArgs {
  description?: string;
  event_source_name?: string;
  kms_key_identifier?: string;
  name: string;
  tags?: { [key: string]: string };
}

export class aws_cloudwatch_event_bus extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCloudwatchEventBusArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_cloudwatch_event_bus", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
