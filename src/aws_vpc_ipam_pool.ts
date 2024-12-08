import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcIpamPoolArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsVpcIpamPoolArgs {
  address_family: string;
  allocation_default_netmask_length?: number;
  allocation_max_netmask_length?: number;
  allocation_min_netmask_length?: number;
  allocation_resource_tags?: { [key: string]: string };
  auto_import?: boolean;
  aws_service?: string;
  cascade?: boolean;
  description?: string;
  ipam_scope_id: string;
  locale?: string;
  public_ip_source?: string;
  publicly_advertisable?: boolean;
  source_ipam_pool_id?: string;
  tags?: { [key: string]: string };
  timeouts?: AwsVpcIpamPoolArgsTimeouts;
}

export class aws_vpc_ipam_pool extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsVpcIpamPoolArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_vpc_ipam_pool", resourceName);
  }

  get address_family(): string {
    return `${this.resourceType}.${this.resourceName}.address_family`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ipam_scope_id(): string {
    return `${this.resourceType}.${this.resourceName}.ipam_scope_id`;
  }

  get ipam_scope_type(): string {
    return `${this.resourceType}.${this.resourceName}.ipam_scope_type`;
  }

  get pool_depth(): string {
    return `${this.resourceType}.${this.resourceName}.pool_depth`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
