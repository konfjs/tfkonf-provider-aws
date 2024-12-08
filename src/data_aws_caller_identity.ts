import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCallerIdentityArgs {
}

export class data_aws_caller_identity extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsCallerIdentityArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_caller_identity", resourceName);
  }

  get account_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.account_id`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get user_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_id`;
  }
}
