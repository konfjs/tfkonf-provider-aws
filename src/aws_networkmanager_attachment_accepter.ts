import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkmanagerAttachmentAccepterArgsTimeouts {
  create?: string;
}

export interface AwsNetworkmanagerAttachmentAccepterArgs {
  attachment_id: string;
  attachment_type: string;
  timeouts?: AwsNetworkmanagerAttachmentAccepterArgsTimeouts;
}

export class aws_networkmanager_attachment_accepter extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsNetworkmanagerAttachmentAccepterArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_networkmanager_attachment_accepter", resourceName);
  }

  get attachment_id(): string {
    return `${this.resourceType}.${this.resourceName}.attachment_id`;
  }

  get attachment_policy_rule_number(): string {
    return `${this.resourceType}.${this.resourceName}.attachment_policy_rule_number`;
  }

  get attachment_type(): string {
    return `${this.resourceType}.${this.resourceName}.attachment_type`;
  }

  get core_network_arn(): string {
    return `${this.resourceType}.${this.resourceName}.core_network_arn`;
  }

  get core_network_id(): string {
    return `${this.resourceType}.${this.resourceName}.core_network_id`;
  }

  get edge_location(): string {
    return `${this.resourceType}.${this.resourceName}.edge_location`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get owner_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_account_id`;
  }

  get resource_arn(): string {
    return `${this.resourceType}.${this.resourceName}.resource_arn`;
  }

  get segment_name(): string {
    return `${this.resourceType}.${this.resourceName}.segment_name`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }
}
