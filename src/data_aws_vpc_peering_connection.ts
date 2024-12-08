import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsVpcPeeringConnectionArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsVpcPeeringConnectionArgsTimeouts {
  read?: string;
}

export interface DataAwsVpcPeeringConnectionArgs {
  filter?: DataAwsVpcPeeringConnectionArgsFilter[];
  timeouts?: DataAwsVpcPeeringConnectionArgsTimeouts;
}

export class data_aws_vpc_peering_connection extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsVpcPeeringConnectionArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_vpc_peering_connection", resourceName);
  }

  get accepter(): string {
    return `data.${this.resourceType}.${this.resourceName}.accepter`;
  }

  get cidr_block(): string {
    return `data.${this.resourceType}.${this.resourceName}.cidr_block`;
  }

  get cidr_block_set(): string {
    return `data.${this.resourceType}.${this.resourceName}.cidr_block_set`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ipv6_cidr_block_set(): string {
    return `data.${this.resourceType}.${this.resourceName}.ipv6_cidr_block_set`;
  }

  get owner_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get peer_cidr_block(): string {
    return `data.${this.resourceType}.${this.resourceName}.peer_cidr_block`;
  }

  get peer_cidr_block_set(): string {
    return `data.${this.resourceType}.${this.resourceName}.peer_cidr_block_set`;
  }

  get peer_ipv6_cidr_block_set(): string {
    return `data.${this.resourceType}.${this.resourceName}.peer_ipv6_cidr_block_set`;
  }

  get peer_owner_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.peer_owner_id`;
  }

  get peer_region(): string {
    return `data.${this.resourceType}.${this.resourceName}.peer_region`;
  }

  get peer_vpc_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.peer_vpc_id`;
  }

  get region(): string {
    return `data.${this.resourceType}.${this.resourceName}.region`;
  }

  get requester(): string {
    return `data.${this.resourceType}.${this.resourceName}.requester`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get vpc_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
