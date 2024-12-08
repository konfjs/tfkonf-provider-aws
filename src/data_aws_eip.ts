import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEipArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEipArgsTimeouts {
  read?: string;
}

export interface DataAwsEipArgs {
  filter?: DataAwsEipArgsFilter[];
  timeouts?: DataAwsEipArgsTimeouts;
}

export class data_aws_eip extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEipArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_eip", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get association_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.association_id`;
  }

  get carrier_ip(): string {
    return `data.${this.resourceType}.${this.resourceName}.carrier_ip`;
  }

  get customer_owned_ip(): string {
    return `data.${this.resourceType}.${this.resourceName}.customer_owned_ip`;
  }

  get customer_owned_ipv4_pool(): string {
    return `data.${this.resourceType}.${this.resourceName}.customer_owned_ipv4_pool`;
  }

  get domain(): string {
    return `data.${this.resourceType}.${this.resourceName}.domain`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get ipam_pool_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.ipam_pool_id`;
  }

  get network_interface_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.network_interface_id`;
  }

  get network_interface_owner_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.network_interface_owner_id`;
  }

  get private_dns(): string {
    return `data.${this.resourceType}.${this.resourceName}.private_dns`;
  }

  get private_ip(): string {
    return `data.${this.resourceType}.${this.resourceName}.private_ip`;
  }

  get ptr_record(): string {
    return `data.${this.resourceType}.${this.resourceName}.ptr_record`;
  }

  get public_dns(): string {
    return `data.${this.resourceType}.${this.resourceName}.public_dns`;
  }

  get public_ip(): string {
    return `data.${this.resourceType}.${this.resourceName}.public_ip`;
  }

  get public_ipv4_pool(): string {
    return `data.${this.resourceType}.${this.resourceName}.public_ipv4_pool`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
