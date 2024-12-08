import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsNetworkInterfaceArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsNetworkInterfaceArgsTimeouts {
  read?: string;
}

export interface DataAwsNetworkInterfaceArgs {
  filter?: DataAwsNetworkInterfaceArgsFilter[];
  timeouts?: DataAwsNetworkInterfaceArgsTimeouts;
}

export class data_aws_network_interface extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsNetworkInterfaceArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_network_interface", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get association(): string {
    return `data.${this.resourceType}.${this.resourceName}.association`;
  }

  get attachment(): string {
    return `data.${this.resourceType}.${this.resourceName}.attachment`;
  }

  get availability_zone(): string {
    return `data.${this.resourceType}.${this.resourceName}.availability_zone`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get interface_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.interface_type`;
  }

  get ipv6_addresses(): string {
    return `data.${this.resourceType}.${this.resourceName}.ipv6_addresses`;
  }

  get mac_address(): string {
    return `data.${this.resourceType}.${this.resourceName}.mac_address`;
  }

  get outpost_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.outpost_arn`;
  }

  get owner_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get private_dns_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.private_dns_name`;
  }

  get private_ip(): string {
    return `data.${this.resourceType}.${this.resourceName}.private_ip`;
  }

  get private_ips(): string {
    return `data.${this.resourceType}.${this.resourceName}.private_ips`;
  }

  get requester_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.requester_id`;
  }

  get security_groups(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_groups`;
  }

  get subnet_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnet_id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get vpc_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
