import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamUserArgs {
  force_destroy?: boolean;
  name: string;
  path?: string;
  permissions_boundary?: string;
  tags?: { [key: string]: string };
}

export class aws_iam_user extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsIamUserArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iam_user", resourceName);
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

  get unique_id(): string {
    return `${this.resourceType}.${this.resourceName}.unique_id`;
  }
}
