import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsIamUsersArgs {
  name_regex?: string;
  path_prefix?: string;
}

export class data_aws_iam_users extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsIamUsersArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_iam_users", resourceName);
  }

  get arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.arns`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get names(): string {
    return `data.${this.resourceType}.${this.resourceName}.names`;
  }
}
