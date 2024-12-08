import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkInterfaceArgsAttachment {
  device_index: number;
  instance: string;
}

export interface AwsNetworkInterfaceArgs {
  description?: string;
  ipv6_address_list_enabled?: boolean;
  private_ip_list_enabled?: boolean;
  source_dest_check?: boolean;
  subnet_id: string;
  tags?: { [key: string]: string };
  attachment?: AwsNetworkInterfaceArgsAttachment[];
}

export class aws_network_interface extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsNetworkInterfaceArgs) {
    const meta = {attachment:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_network_interface", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get interface_type(): string {
    return `${this.resourceType}.${this.resourceName}.interface_type`;
  }

  get ipv4_prefix_count(): string {
    return `${this.resourceType}.${this.resourceName}.ipv4_prefix_count`;
  }

  get ipv4_prefixes(): string {
    return `${this.resourceType}.${this.resourceName}.ipv4_prefixes`;
  }

  get ipv6_address_count(): string {
    return `${this.resourceType}.${this.resourceName}.ipv6_address_count`;
  }

  get ipv6_address_list(): string {
    return `${this.resourceType}.${this.resourceName}.ipv6_address_list`;
  }

  get ipv6_addresses(): string {
    return `${this.resourceType}.${this.resourceName}.ipv6_addresses`;
  }

  get ipv6_prefix_count(): string {
    return `${this.resourceType}.${this.resourceName}.ipv6_prefix_count`;
  }

  get ipv6_prefixes(): string {
    return `${this.resourceType}.${this.resourceName}.ipv6_prefixes`;
  }

  get mac_address(): string {
    return `${this.resourceType}.${this.resourceName}.mac_address`;
  }

  get outpost_arn(): string {
    return `${this.resourceType}.${this.resourceName}.outpost_arn`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get private_dns_name(): string {
    return `${this.resourceType}.${this.resourceName}.private_dns_name`;
  }

  get private_ip(): string {
    return `${this.resourceType}.${this.resourceName}.private_ip`;
  }

  get private_ip_list(): string {
    return `${this.resourceType}.${this.resourceName}.private_ip_list`;
  }

  get private_ips(): string {
    return `${this.resourceType}.${this.resourceName}.private_ips`;
  }

  get private_ips_count(): string {
    return `${this.resourceType}.${this.resourceName}.private_ips_count`;
  }

  get security_groups(): string {
    return `${this.resourceType}.${this.resourceName}.security_groups`;
  }

  get subnet_id(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
