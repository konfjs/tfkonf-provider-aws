import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGuarddutyInviteAccepterArgsTimeouts {
  create?: string;
}

export interface AwsGuarddutyInviteAccepterArgs {
  detector_id: string;
  master_account_id: string;
  timeouts?: AwsGuarddutyInviteAccepterArgsTimeouts;
}

export class aws_guardduty_invite_accepter extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsGuarddutyInviteAccepterArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_guardduty_invite_accepter", resourceName);
  }

  get detector_id(): string {
    return `${this.resourceType}.${this.resourceName}.detector_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get master_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.master_account_id`;
  }
}
