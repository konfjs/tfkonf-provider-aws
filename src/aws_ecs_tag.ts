import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEcsTagArgs {
  key: string;
  resource_arn: string;
  value: string;
}

export class aws_ecs_tag extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEcsTagArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ecs_tag", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key(): string {
    return `${this.resourceType}.${this.resourceName}.key`;
  }

  get resource_arn(): string {
    return `${this.resourceType}.${this.resourceName}.resource_arn`;
  }

  get value(): string {
    return `${this.resourceType}.${this.resourceName}.value`;
  }
}
