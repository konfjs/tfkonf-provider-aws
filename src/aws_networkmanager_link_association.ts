import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkmanagerLinkAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsNetworkmanagerLinkAssociationArgs {
  device_id: string;
  global_network_id: string;
  link_id: string;
  timeouts?: AwsNetworkmanagerLinkAssociationArgsTimeouts;
}

export class aws_networkmanager_link_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsNetworkmanagerLinkAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_networkmanager_link_association", resourceName);
  }

  get device_id(): string {
    return `${this.resourceType}.${this.resourceName}.device_id`;
  }

  get global_network_id(): string {
    return `${this.resourceType}.${this.resourceName}.global_network_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get link_id(): string {
    return `${this.resourceType}.${this.resourceName}.link_id`;
  }
}
