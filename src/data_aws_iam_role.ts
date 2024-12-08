import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsIamRoleArgs {
  name: string;
}

export class data_aws_iam_role extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsIamRoleArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_iam_role", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get assume_role_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.assume_role_policy`;
  }

  get create_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_date`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get max_session_duration(): string {
    return `data.${this.resourceType}.${this.resourceName}.max_session_duration`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get path(): string {
    return `data.${this.resourceType}.${this.resourceName}.path`;
  }

  get permissions_boundary(): string {
    return `data.${this.resourceType}.${this.resourceName}.permissions_boundary`;
  }

  get role_last_used(): string {
    return `data.${this.resourceType}.${this.resourceName}.role_last_used`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get unique_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.unique_id`;
  }
}
