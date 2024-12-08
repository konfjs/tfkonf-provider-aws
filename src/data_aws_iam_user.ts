import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsIamUserArgs {
  user_name: string;
}

export class data_aws_iam_user extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsIamUserArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_iam_user", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get path(): string {
    return `data.${this.resourceType}.${this.resourceName}.path`;
  }

  get permissions_boundary(): string {
    return `data.${this.resourceType}.${this.resourceName}.permissions_boundary`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get user_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_id`;
  }

  get user_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_name`;
  }
}
