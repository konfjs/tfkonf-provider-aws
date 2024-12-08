import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcIpamPoolCidrAllocationArgs {
  description?: string;
  disallowed_cidrs?: string[];
  ipam_pool_id: string;
}

export class aws_vpc_ipam_pool_cidr_allocation extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsVpcIpamPoolCidrAllocationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_vpc_ipam_pool_cidr_allocation", resourceName);
  }

  get cidr(): string {
    return `${this.resourceType}.${this.resourceName}.cidr`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ipam_pool_allocation_id(): string {
    return `${this.resourceType}.${this.resourceName}.ipam_pool_allocation_id`;
  }

  get ipam_pool_id(): string {
    return `${this.resourceType}.${this.resourceName}.ipam_pool_id`;
  }

  get netmask_length(): string {
    return `${this.resourceType}.${this.resourceName}.netmask_length`;
  }

  get resource_id(): string {
    return `${this.resourceType}.${this.resourceName}.resource_id`;
  }

  get resource_owner(): string {
    return `${this.resourceType}.${this.resourceName}.resource_owner`;
  }

  get resource_type(): string {
    return `${this.resourceType}.${this.resourceName}.resource_type`;
  }
}
