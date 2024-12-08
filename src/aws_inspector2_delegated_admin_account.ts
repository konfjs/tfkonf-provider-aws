import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsInspector2DelegatedAdminAccountArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsInspector2DelegatedAdminAccountArgs {
  account_id: string;
  timeouts?: AwsInspector2DelegatedAdminAccountArgsTimeouts;
}

export class aws_inspector2_delegated_admin_account extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsInspector2DelegatedAdminAccountArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_inspector2_delegated_admin_account", resourceName);
  }

  get account_id(): string {
    return `${this.resourceType}.${this.resourceName}.account_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get relationship_status(): string {
    return `${this.resourceType}.${this.resourceName}.relationship_status`;
  }
}
