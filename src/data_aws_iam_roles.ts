import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsIamRolesArgs {
  name_regex?: string;
  path_prefix?: string;
}

export class data_aws_iam_roles extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsIamRolesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_iam_roles", resourceName);
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
