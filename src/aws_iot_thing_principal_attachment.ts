import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIotThingPrincipalAttachmentArgs {
  principal: string;
  thing: string;
}

export class aws_iot_thing_principal_attachment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsIotThingPrincipalAttachmentArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iot_thing_principal_attachment", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get principal(): string {
    return `${this.resourceType}.${this.resourceName}.principal`;
  }

  get thing(): string {
    return `${this.resourceType}.${this.resourceName}.thing`;
  }
}
