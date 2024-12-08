import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsNetworkmanagerLinkArgs {
  global_network_id: string;
  link_id: string;
}

export class data_aws_networkmanager_link extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsNetworkmanagerLinkArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_networkmanager_link", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get bandwidth(): string {
    return `data.${this.resourceType}.${this.resourceName}.bandwidth`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get global_network_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.global_network_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get link_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.link_id`;
  }

  get provider_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.provider_name`;
  }

  get site_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.site_id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }
}
