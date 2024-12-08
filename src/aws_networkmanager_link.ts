import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkmanagerLinkArgsBandwidth {
  download_speed?: number;
  upload_speed?: number;
}

export interface AwsNetworkmanagerLinkArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsNetworkmanagerLinkArgs {
  description?: string;
  global_network_id: string;
  provider_name?: string;
  site_id: string;
  tags?: { [key: string]: string };
  type?: string;
  bandwidth: AwsNetworkmanagerLinkArgsBandwidth;
  timeouts?: AwsNetworkmanagerLinkArgsTimeouts;
}

export class aws_networkmanager_link extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsNetworkmanagerLinkArgs) {
    const meta = {bandwidth:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_networkmanager_link", resourceName);
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

  get site_id(): string {
    return `${this.resourceType}.${this.resourceName}.site_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
