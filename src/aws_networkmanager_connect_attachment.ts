import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkmanagerConnectAttachmentArgsOptions {
  protocol?: string;
}

export interface AwsNetworkmanagerConnectAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsNetworkmanagerConnectAttachmentArgs {
  core_network_id: string;
  edge_location: string;
  tags?: { [key: string]: string };
  transport_attachment_id: string;
  options: AwsNetworkmanagerConnectAttachmentArgsOptions;
  timeouts?: AwsNetworkmanagerConnectAttachmentArgsTimeouts;
}

export class aws_networkmanager_connect_attachment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsNetworkmanagerConnectAttachmentArgs) {
    const meta = {options:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_networkmanager_connect_attachment", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
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

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get transport_attachment_id(): string {
    return `${this.resourceType}.${this.resourceName}.transport_attachment_id`;
  }
}
