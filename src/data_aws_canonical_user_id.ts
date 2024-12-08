import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCanonicalUserIdArgs {
}

export class data_aws_canonical_user_id extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsCanonicalUserIdArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_canonical_user_id", resourceName);
  }

  get display_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.display_name`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
