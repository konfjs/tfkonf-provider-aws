import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamGroupArgs {
  name: string;
  path?: string;
}

export class aws_iam_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsIamGroupArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iam_group", resourceName);
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

  get unique_id(): string {
    return `${this.resourceType}.${this.resourceName}.unique_id`;
  }
}
