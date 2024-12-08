import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcIpamResourceDiscoveryArgsOperatingRegions {
  region_name: string;
}

export interface AwsVpcIpamResourceDiscoveryArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsVpcIpamResourceDiscoveryArgs {
  description?: string;
  tags?: { [key: string]: string };
  operating_regions: AwsVpcIpamResourceDiscoveryArgsOperatingRegions[];
  timeouts?: AwsVpcIpamResourceDiscoveryArgsTimeouts;
}

export class aws_vpc_ipam_resource_discovery extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsVpcIpamResourceDiscoveryArgs) {
    const meta = {operating_regions:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_vpc_ipam_resource_discovery", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ipam_resource_discovery_region(): string {
    return `${this.resourceType}.${this.resourceName}.ipam_resource_discovery_region`;
  }

  get is_default(): string {
    return `${this.resourceType}.${this.resourceName}.is_default`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
