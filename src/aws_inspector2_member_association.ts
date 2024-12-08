import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsInspector2MemberAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsInspector2MemberAssociationArgs {
  account_id: string;
  timeouts?: AwsInspector2MemberAssociationArgsTimeouts;
}

export class aws_inspector2_member_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsInspector2MemberAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_inspector2_member_association", resourceName);
  }

  get account_id(): string {
    return `${this.resourceType}.${this.resourceName}.account_id`;
  }

  get delegated_admin_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.delegated_admin_account_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get relationship_status(): string {
    return `${this.resourceType}.${this.resourceName}.relationship_status`;
  }

  get updated_at(): string {
    return `${this.resourceType}.${this.resourceName}.updated_at`;
  }
}
