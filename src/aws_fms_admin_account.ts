import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsFmsAdminAccountArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsFmsAdminAccountArgs {
  timeouts?: AwsFmsAdminAccountArgsTimeouts;
}

export class aws_fms_admin_account extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsFmsAdminAccountArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_fms_admin_account", resourceName);
  }

  get account_id(): string {
    return `${this.resourceType}.${this.resourceName}.account_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
