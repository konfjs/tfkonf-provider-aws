import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsShieldProtectionArgs {
  name: string;
  resource_arn: string;
  tags?: { [key: string]: string };
}

export class aws_shield_protection extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsShieldProtectionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_shield_protection", resourceName);
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

  get resource_arn(): string {
    return `${this.resourceType}.${this.resourceName}.resource_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
