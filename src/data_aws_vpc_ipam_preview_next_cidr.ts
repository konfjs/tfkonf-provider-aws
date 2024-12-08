import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsVpcIpamPreviewNextCidrArgsTimeouts {
  read?: string;
}

export interface DataAwsVpcIpamPreviewNextCidrArgs {
  disallowed_cidrs?: string[];
  ipam_pool_id: string;
  netmask_length?: number;
  timeouts?: DataAwsVpcIpamPreviewNextCidrArgsTimeouts;
}

export class data_aws_vpc_ipam_preview_next_cidr extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsVpcIpamPreviewNextCidrArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_vpc_ipam_preview_next_cidr", resourceName);
  }

  get cidr(): string {
    return `data.${this.resourceType}.${this.resourceName}.cidr`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ipam_pool_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.ipam_pool_id`;
  }
}
