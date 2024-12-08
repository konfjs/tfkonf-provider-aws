import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsNatGatewayArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsNatGatewayArgsTimeouts {
  read?: string;
}

export interface DataAwsNatGatewayArgs {
  filter?: DataAwsNatGatewayArgsFilter[];
  timeouts?: DataAwsNatGatewayArgsTimeouts;
}

export class data_aws_nat_gateway extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsNatGatewayArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_nat_gateway", resourceName);
  }

  get allocation_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.allocation_id`;
  }

  get association_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.association_id`;
  }

  get connectivity_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.connectivity_type`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get network_interface_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.network_interface_id`;
  }

  get private_ip(): string {
    return `data.${this.resourceType}.${this.resourceName}.private_ip`;
  }

  get public_ip(): string {
    return `data.${this.resourceType}.${this.resourceName}.public_ip`;
  }

  get secondary_allocation_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.secondary_allocation_ids`;
  }

  get secondary_private_ip_address_count(): string {
    return `data.${this.resourceType}.${this.resourceName}.secondary_private_ip_address_count`;
  }

  get secondary_private_ip_addresses(): string {
    return `data.${this.resourceType}.${this.resourceName}.secondary_private_ip_addresses`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
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
