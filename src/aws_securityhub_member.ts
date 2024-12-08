import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSecurityhubMemberArgs {
  account_id: string;
  email?: string;
  invite?: boolean;
}

export class aws_securityhub_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSecurityhubMemberArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_securityhub_member", resourceName);
  }

  get account_id(): string {
    return `${this.resourceType}.${this.resourceName}.account_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get master_id(): string {
    return `${this.resourceType}.${this.resourceName}.master_id`;
  }

  get member_status(): string {
    return `${this.resourceType}.${this.resourceName}.member_status`;
  }
}
