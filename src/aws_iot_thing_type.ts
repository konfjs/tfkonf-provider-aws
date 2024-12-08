import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIotThingTypeArgsProperties {
  description?: string;
}

export interface AwsIotThingTypeArgs {
  deprecated?: boolean;
  name: string;
  tags?: { [key: string]: string };
  properties?: AwsIotThingTypeArgsProperties;
}

export class aws_iot_thing_type extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsIotThingTypeArgs) {
    const meta = {properties:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_iot_thing_type", resourceName);
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
