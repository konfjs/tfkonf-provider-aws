import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamPolicyArgs {
  description?: string;
  path?: string;
  policy: string;
  tags?: { [key: string]: string };
}

export class aws_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iam_policy", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get attachment_count(): string {
    return `${this.resourceType}.${this.resourceName}.attachment_count`;
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

  get policy_id(): string {
    return `${this.resourceType}.${this.resourceName}.policy_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
