import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSyntheticsGroupArgs {
  name: string;
  tags?: { [key: string]: string };
}

export class aws_synthetics_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSyntheticsGroupArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_synthetics_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get group_id(): string {
    return `${this.resourceType}.${this.resourceName}.group_id`;
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
