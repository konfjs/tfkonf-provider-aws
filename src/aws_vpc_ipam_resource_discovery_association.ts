import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcIpamResourceDiscoveryAssociationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsVpcIpamResourceDiscoveryAssociationArgs {
  ipam_id: string;
  ipam_resource_discovery_id: string;
  tags?: { [key: string]: string };
  timeouts?: AwsVpcIpamResourceDiscoveryAssociationArgsTimeouts;
}

export class aws_vpc_ipam_resource_discovery_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsVpcIpamResourceDiscoveryAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_vpc_ipam_resource_discovery_association", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ipam_arn(): string {
    return `${this.resourceType}.${this.resourceName}.ipam_arn`;
  }

  get ipam_id(): string {
    return `${this.resourceType}.${this.resourceName}.ipam_id`;
  }

  get ipam_region(): string {
    return `${this.resourceType}.${this.resourceName}.ipam_region`;
  }

  get ipam_resource_discovery_id(): string {
    return `${this.resourceType}.${this.resourceName}.ipam_resource_discovery_id`;
  }

  get is_default(): string {
    return `${this.resourceType}.${this.resourceName}.is_default`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
