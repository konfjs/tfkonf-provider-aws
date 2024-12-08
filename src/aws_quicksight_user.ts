import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsQuicksightUserArgs {
  email: string;
  iam_arn?: string;
  identity_type: string;
  namespace?: string;
  session_name?: string;
  user_name?: string;
  user_role: string;
}

export class aws_quicksight_user extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsQuicksightUserArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_quicksight_user", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get aws_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.aws_account_id`;
  }

  get email(): string {
    return `${this.resourceType}.${this.resourceName}.email`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get identity_type(): string {
    return `${this.resourceType}.${this.resourceName}.identity_type`;
  }

  get user_role(): string {
    return `${this.resourceType}.${this.resourceName}.user_role`;
  }
}
