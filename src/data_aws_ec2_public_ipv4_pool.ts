import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2PublicIpv4PoolArgs {
  pool_id: string;
}

export class data_aws_ec2_public_ipv4_pool extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEc2PublicIpv4PoolArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_ec2_public_ipv4_pool", resourceName);
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get network_border_group(): string {
    return `data.${this.resourceType}.${this.resourceName}.network_border_group`;
  }

  get pool_address_ranges(): string {
    return `data.${this.resourceType}.${this.resourceName}.pool_address_ranges`;
  }

  get pool_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.pool_id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get total_address_count(): string {
    return `data.${this.resourceType}.${this.resourceName}.total_address_count`;
  }

  get total_available_address_count(): string {
    return `data.${this.resourceType}.${this.resourceName}.total_available_address_count`;
  }
}
