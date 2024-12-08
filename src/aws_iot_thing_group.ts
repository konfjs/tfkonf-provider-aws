import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIotThingGroupArgsPropertiesAttributePayload {
  attributes?: { [key: string]: string };
}

export interface AwsIotThingGroupArgsProperties {
  description?: string;
  attribute_payload?: AwsIotThingGroupArgsPropertiesAttributePayload;
}

export interface AwsIotThingGroupArgs {
  name: string;
  parent_group_name?: string;
  tags?: { [key: string]: string };
  properties?: AwsIotThingGroupArgsProperties;
}

export class aws_iot_thing_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsIotThingGroupArgs) {
    const meta = {properties:{isBlock:true,attribute_payload:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_iot_thing_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get metadata(): string {
    return `${this.resourceType}.${this.resourceName}.metadata`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
