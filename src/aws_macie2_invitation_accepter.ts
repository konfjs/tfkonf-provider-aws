import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMacie2InvitationAccepterArgsTimeouts {
  create?: string;
}

export interface AwsMacie2InvitationAccepterArgs {
  administrator_account_id: string;
  timeouts?: AwsMacie2InvitationAccepterArgsTimeouts;
}

export class aws_macie2_invitation_accepter extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsMacie2InvitationAccepterArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_macie2_invitation_accepter", resourceName);
  }

  get administrator_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.administrator_account_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get invitation_id(): string {
    return `${this.resourceType}.${this.resourceName}.invitation_id`;
  }
}
