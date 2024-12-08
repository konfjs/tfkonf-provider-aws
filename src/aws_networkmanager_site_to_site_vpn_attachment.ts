import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkmanagerSiteToSiteVpnAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsNetworkmanagerSiteToSiteVpnAttachmentArgs {
  core_network_id: string;
  tags?: { [key: string]: string };
  vpn_connection_arn: string;
  timeouts?: AwsNetworkmanagerSiteToSiteVpnAttachmentArgsTimeouts;
}

export class aws_networkmanager_site_to_site_vpn_attachment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsNetworkmanagerSiteToSiteVpnAttachmentArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_networkmanager_site_to_site_vpn_attachment", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
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

  get vpn_connection_arn(): string {
    return `${this.resourceType}.${this.resourceName}.vpn_connection_arn`;
  }
}
