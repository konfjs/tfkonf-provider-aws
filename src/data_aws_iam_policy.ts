import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsIamPolicyArgs {
  path_prefix?: string;
}

export class data_aws_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_iam_policy", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get attachment_count(): string {
    return `data.${this.resourceType}.${this.resourceName}.attachment_count`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get path(): string {
    return `data.${this.resourceType}.${this.resourceName}.path`;
  }

  get policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy`;
  }

  get policy_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
