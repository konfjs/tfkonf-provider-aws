import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlueResourcePolicyArgs {
  enable_hybrid?: string;
  policy: string;
}

export class aws_glue_resource_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsGlueResourcePolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_glue_resource_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }
}