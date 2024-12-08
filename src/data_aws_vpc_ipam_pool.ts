import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsVpcIpamPoolArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsVpcIpamPoolArgsTimeouts {
  read?: string;
}

export interface DataAwsVpcIpamPoolArgs {
  id?: string;
  ipam_pool_id?: string;
  filter?: DataAwsVpcIpamPoolArgsFilter[];
  timeouts?: DataAwsVpcIpamPoolArgsTimeouts;
}

export class data_aws_vpc_ipam_pool extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsVpcIpamPoolArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_vpc_ipam_pool", resourceName);
  }

  get address_family(): string {
    return `data.${this.resourceType}.${this.resourceName}.address_family`;
  }

  get allocation_default_netmask_length(): string {
    return `data.${this.resourceType}.${this.resourceName}.allocation_default_netmask_length`;
  }

  get allocation_max_netmask_length(): string {
    return `data.${this.resourceType}.${this.resourceName}.allocation_max_netmask_length`;
  }

  get allocation_min_netmask_length(): string {
    return `data.${this.resourceType}.${this.resourceName}.allocation_min_netmask_length`;
  }

  get allocation_resource_tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.allocation_resource_tags`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get auto_import(): string {
    return `data.${this.resourceType}.${this.resourceName}.auto_import`;
  }

  get aws_service(): string {
    return `data.${this.resourceType}.${this.resourceName}.aws_service`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get ipam_scope_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.ipam_scope_id`;
  }

  get ipam_scope_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.ipam_scope_type`;
  }

  get locale(): string {
    return `data.${this.resourceType}.${this.resourceName}.locale`;
  }

  get pool_depth(): string {
    return `data.${this.resourceType}.${this.resourceName}.pool_depth`;
  }

  get publicly_advertisable(): string {
    return `data.${this.resourceType}.${this.resourceName}.publicly_advertisable`;
  }

  get source_ipam_pool_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.source_ipam_pool_id`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
