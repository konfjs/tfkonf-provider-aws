import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMacie2MemberArgsTimeouts {
  create?: string;
  update?: string;
}

export interface AwsMacie2MemberArgs {
  account_id: string;
  email: string;
  invitation_disable_email_notification?: boolean;
  invitation_message?: string;
  tags?: { [key: string]: string };
  timeouts?: AwsMacie2MemberArgsTimeouts;
}

export class aws_macie2_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsMacie2MemberArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_macie2_member", resourceName);
  }

  get account_id(): string {
    return `${this.resourceType}.${this.resourceName}.account_id`;
  }

  get administrator_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.administrator_account_id`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get email(): string {
    return `${this.resourceType}.${this.resourceName}.email`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get invite(): string {
    return `${this.resourceType}.${this.resourceName}.invite`;
  }

  get invited_at(): string {
    return `${this.resourceType}.${this.resourceName}.invited_at`;
  }

  get master_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.master_account_id`;
  }

  get relationship_status(): string {
    return `${this.resourceType}.${this.resourceName}.relationship_status`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get updated_at(): string {
    return `${this.resourceType}.${this.resourceName}.updated_at`;
  }
}
