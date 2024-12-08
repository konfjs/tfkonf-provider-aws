import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppconfigApplicationArgs {
  description?: string;
  name: string;
  tags?: { [key: string]: string };
}

export class aws_appconfig_application extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAppconfigApplicationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_appconfig_application", resourceName);
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
