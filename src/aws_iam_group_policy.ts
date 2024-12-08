import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamGroupPolicyArgs {
  group: string;
  policy: string;
}

export class aws_iam_group_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsIamGroupPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iam_group_policy", resourceName);
  }

  get group(): string {
    return `${this.resourceType}.${this.resourceName}.group`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }
}
