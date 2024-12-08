import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNatGatewayArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsNatGatewayArgs {
  allocation_id?: string;
  connectivity_type?: string;
  secondary_allocation_ids?: string[];
  subnet_id: string;
  tags?: { [key: string]: string };
  timeouts?: AwsNatGatewayArgsTimeouts;
}

export class aws_nat_gateway extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsNatGatewayArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_nat_gateway", resourceName);
  }

  get association_id(): string {
    return `${this.resourceType}.${this.resourceName}.association_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get network_interface_id(): string {
    return `${this.resourceType}.${this.resourceName}.network_interface_id`;
  }

  get private_ip(): string {
    return `${this.resourceType}.${this.resourceName}.private_ip`;
  }

  get public_ip(): string {
    return `${this.resourceType}.${this.resourceName}.public_ip`;
  }

  get secondary_private_ip_address_count(): string {
    return `${this.resourceType}.${this.resourceName}.secondary_private_ip_address_count`;
  }

  get secondary_private_ip_addresses(): string {
    return `${this.resourceType}.${this.resourceName}.secondary_private_ip_addresses`;
  }

  get subnet_id(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
