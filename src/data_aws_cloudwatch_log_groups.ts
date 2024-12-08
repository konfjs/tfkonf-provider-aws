import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCloudwatchLogGroupsArgs {
  log_group_name_prefix?: string;
}

export class data_aws_cloudwatch_log_groups extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsCloudwatchLogGroupsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_cloudwatch_log_groups", resourceName);
  }

  get arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.arns`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get log_group_names(): string {
    return `data.${this.resourceType}.${this.resourceName}.log_group_names`;
  }
}
