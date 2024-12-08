import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcIpamPreviewNextCidrArgs {
  disallowed_cidrs?: string[];
  ipam_pool_id: string;
  netmask_length?: number;
}

export class aws_vpc_ipam_preview_next_cidr extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsVpcIpamPreviewNextCidrArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_vpc_ipam_preview_next_cidr", resourceName);
  }

  get cidr(): string {
    return `${this.resourceType}.${this.resourceName}.cidr`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ipam_pool_id(): string {
    return `${this.resourceType}.${this.resourceName}.ipam_pool_id`;
  }
}
