import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamRoleArgsInlinePolicy {
  name?: string;
  policy?: string;
}

export interface AwsIamRoleArgs {
  assume_role_policy: string;
  description?: string;
  force_detach_policies?: boolean;
  max_session_duration?: number;
  path?: string;
  permissions_boundary?: string;
  tags?: { [key: string]: string };
  inline_policy?: AwsIamRoleArgsInlinePolicy[];
}

export class aws_iam_role extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsIamRoleArgs) {
    const meta = {inline_policy:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_iam_role", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get assume_role_policy(): string {
    return `${this.resourceType}.${this.resourceName}.assume_role_policy`;
  }

  get create_date(): string {
    return `${this.resourceType}.${this.resourceName}.create_date`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get managed_policy_arns(): string {
    return `${this.resourceType}.${this.resourceName}.managed_policy_arns`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get unique_id(): string {
    return `${this.resourceType}.${this.resourceName}.unique_id`;
  }
}
