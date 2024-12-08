import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIotThingArgs {
  attributes?: { [key: string]: string };
  name: string;
  thing_type_name?: string;
}

export class aws_iot_thing extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsIotThingArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iot_thing", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get default_client_id(): string {
    return `${this.resourceType}.${this.resourceName}.default_client_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
