import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkmanagerSiteArgsLocation {
  address?: string;
  latitude?: string;
  longitude?: string;
}

export interface AwsNetworkmanagerSiteArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsNetworkmanagerSiteArgs {
  description?: string;
  global_network_id: string;
  tags?: { [key: string]: string };
  location?: AwsNetworkmanagerSiteArgsLocation;
  timeouts?: AwsNetworkmanagerSiteArgsTimeouts;
}

export class aws_networkmanager_site extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsNetworkmanagerSiteArgs) {
    const meta = {location:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_networkmanager_site", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get global_network_id(): string {
    return `${this.resourceType}.${this.resourceName}.global_network_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
