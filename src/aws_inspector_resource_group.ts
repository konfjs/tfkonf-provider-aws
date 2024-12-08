import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsInspectorResourceGroupArgs {
  tags: { [key: string]: string };
}

export class aws_inspector_resource_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsInspectorResourceGroupArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_inspector_resource_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags(): string {
    return `${this.resourceType}.${this.resourceName}.tags`;
  }
}
