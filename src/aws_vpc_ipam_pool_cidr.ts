import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcIpamPoolCidrArgsCidrAuthorizationContext {
  message?: string;
  signature?: string;
}

export interface AwsVpcIpamPoolCidrArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsVpcIpamPoolCidrArgs {
  ipam_pool_id: string;
  netmask_length?: number;
  cidr_authorization_context?: AwsVpcIpamPoolCidrArgsCidrAuthorizationContext;
  timeouts?: AwsVpcIpamPoolCidrArgsTimeouts;
}

export class aws_vpc_ipam_pool_cidr extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsVpcIpamPoolCidrArgs) {
    const meta = {cidr_authorization_context:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_vpc_ipam_pool_cidr", resourceName);
  }

  get cidr(): string {
    return `${this.resourceType}.${this.resourceName}.cidr`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ipam_pool_cidr_id(): string {
    return `${this.resourceType}.${this.resourceName}.ipam_pool_cidr_id`;
  }

  get ipam_pool_id(): string {
    return `${this.resourceType}.${this.resourceName}.ipam_pool_id`;
  }
}
