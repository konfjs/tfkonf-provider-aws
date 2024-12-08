import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsIamAccessKeysArgs {
  user: string;
}

export class data_aws_iam_access_keys extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsIamAccessKeysArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_iam_access_keys", resourceName);
  }

  get access_keys(): string {
    return `data.${this.resourceType}.${this.resourceName}.access_keys`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get user(): string {
    return `data.${this.resourceType}.${this.resourceName}.user`;
  }
}
