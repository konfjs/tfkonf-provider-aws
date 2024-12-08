import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEipArgsTimeouts {
  delete?: string;
  read?: string;
  update?: string;
}

export interface AwsEipArgs {
  address?: string;
  associate_with_private_ip?: string;
  customer_owned_ipv4_pool?: string;
  tags?: { [key: string]: string };
  timeouts?: AwsEipArgsTimeouts;
}

export class aws_eip extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEipArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_eip", resourceName);
  }

  get allocation_id(): string {
    return `${this.resourceType}.${this.resourceName}.allocation_id`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get association_id(): string {
    return `${this.resourceType}.${this.resourceName}.association_id`;
  }

  get carrier_ip(): string {
    return `${this.resourceType}.${this.resourceName}.carrier_ip`;
  }

  get customer_owned_ip(): string {
    return `${this.resourceType}.${this.resourceName}.customer_owned_ip`;
  }

  get domain(): string {
    return `${this.resourceType}.${this.resourceName}.domain`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance(): string {
    return `${this.resourceType}.${this.resourceName}.instance`;
  }

  get ipam_pool_id(): string {
    return `${this.resourceType}.${this.resourceName}.ipam_pool_id`;
  }

  get network_border_group(): string {
    return `${this.resourceType}.${this.resourceName}.network_border_group`;
  }

  get network_interface(): string {
    return `${this.resourceType}.${this.resourceName}.network_interface`;
  }

  get private_dns(): string {
    return `${this.resourceType}.${this.resourceName}.private_dns`;
  }

  get private_ip(): string {
    return `${this.resourceType}.${this.resourceName}.private_ip`;
  }

  get ptr_record(): string {
    return `${this.resourceType}.${this.resourceName}.ptr_record`;
  }

  get public_dns(): string {
    return `${this.resourceType}.${this.resourceName}.public_dns`;
  }

  get public_ip(): string {
    return `${this.resourceType}.${this.resourceName}.public_ip`;
  }

  get public_ipv4_pool(): string {
    return `${this.resourceType}.${this.resourceName}.public_ipv4_pool`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vpc(): string {
    return `${this.resourceType}.${this.resourceName}.vpc`;
  }
}
