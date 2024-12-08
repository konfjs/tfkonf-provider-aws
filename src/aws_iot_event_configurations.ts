import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIotEventConfigurationsArgs {
  event_configurations: { [key: string]: any };
}

export class aws_iot_event_configurations extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsIotEventConfigurationsArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iot_event_configurations", resourceName);
  }

  get event_configurations(): string {
    return `${this.resourceType}.${this.resourceName}.event_configurations`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
