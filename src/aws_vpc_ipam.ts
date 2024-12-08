import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcIpamArgsOperatingRegions {
  region_name: string;
}

export interface AwsVpcIpamArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsVpcIpamArgs {
  cascade?: boolean;
  description?: string;
  enable_private_gua?: boolean;
  tags?: { [key: string]: string };
  tier?: string;
  operating_regions: AwsVpcIpamArgsOperatingRegions[];
  timeouts?: AwsVpcIpamArgsTimeouts;
}

export class aws_vpc_ipam extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsVpcIpamArgs) {
    const meta = {operating_regions:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_vpc_ipam", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get default_resource_discovery_association_id(): string {
    return `${this.resourceType}.${this.resourceName}.default_resource_discovery_association_id`;
  }

  get default_resource_discovery_id(): string {
    return `${this.resourceType}.${this.resourceName}.default_resource_discovery_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get private_default_scope_id(): string {
    return `${this.resourceType}.${this.resourceName}.private_default_scope_id`;
  }

  get public_default_scope_id(): string {
    return `${this.resourceType}.${this.resourceName}.public_default_scope_id`;
  }

  get scope_count(): string {
    return `${this.resourceType}.${this.resourceName}.scope_count`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
