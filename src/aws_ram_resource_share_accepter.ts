import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRamResourceShareAccepterArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsRamResourceShareAccepterArgs {
  share_arn: string;
  timeouts?: AwsRamResourceShareAccepterArgsTimeouts;
}

export class aws_ram_resource_share_accepter extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRamResourceShareAccepterArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ram_resource_share_accepter", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get invitation_arn(): string {
    return `${this.resourceType}.${this.resourceName}.invitation_arn`;
  }

  get receiver_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.receiver_account_id`;
  }

  get resources(): string {
    return `${this.resourceType}.${this.resourceName}.resources`;
  }

  get sender_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.sender_account_id`;
  }

  get share_arn(): string {
    return `${this.resourceType}.${this.resourceName}.share_arn`;
  }

  get share_id(): string {
    return `${this.resourceType}.${this.resourceName}.share_id`;
  }

  get share_name(): string {
    return `${this.resourceType}.${this.resourceName}.share_name`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }
}
