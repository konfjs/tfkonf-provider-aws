import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsQuicksightUserArgs {
  namespace?: string;
  user_name: string;
}

export class data_aws_quicksight_user extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsQuicksightUserArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_quicksight_user", resourceName);
  }

  get active(): string {
    return `data.${this.resourceType}.${this.resourceName}.active`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get aws_account_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.aws_account_id`;
  }

  get email(): string {
    return `data.${this.resourceType}.${this.resourceName}.email`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get identity_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.identity_type`;
  }

  get principal_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.principal_id`;
  }

  get user_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_name`;
  }

  get user_role(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_role`;
  }
}
