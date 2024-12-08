import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGuarddutyMemberArgsTimeouts {
  create?: string;
  update?: string;
}

export interface AwsGuarddutyMemberArgs {
  account_id: string;
  detector_id: string;
  disable_email_notification?: boolean;
  email: string;
  invitation_message?: string;
  invite?: boolean;
  timeouts?: AwsGuarddutyMemberArgsTimeouts;
}

export class aws_guardduty_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsGuarddutyMemberArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_guardduty_member", resourceName);
  }

  get account_id(): string {
    return `${this.resourceType}.${this.resourceName}.account_id`;
  }

  get detector_id(): string {
    return `${this.resourceType}.${this.resourceName}.detector_id`;
  }

  get email(): string {
    return `${this.resourceType}.${this.resourceName}.email`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get relationship_status(): string {
    return `${this.resourceType}.${this.resourceName}.relationship_status`;
  }
}
