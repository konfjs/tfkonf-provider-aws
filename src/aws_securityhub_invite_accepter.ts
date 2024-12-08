import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSecurityhubInviteAccepterArgs {
  master_id: string;
}

export class aws_securityhub_invite_accepter extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSecurityhubInviteAccepterArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_securityhub_invite_accepter", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get invitation_id(): string {
    return `${this.resourceType}.${this.resourceName}.invitation_id`;
  }

  get master_id(): string {
    return `${this.resourceType}.${this.resourceName}.master_id`;
  }
}
