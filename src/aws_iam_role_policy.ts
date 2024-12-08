import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamRolePolicyArgs {
  policy: string;
  role: string;
}

export class aws_iam_role_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsIamRolePolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iam_role_policy", resourceName);
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

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
