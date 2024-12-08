import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcPeeringConnectionArgsAccepter {
  allow_remote_vpc_dns_resolution?: boolean;
}

export interface AwsVpcPeeringConnectionArgsRequester {
  allow_remote_vpc_dns_resolution?: boolean;
}

export interface AwsVpcPeeringConnectionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsVpcPeeringConnectionArgs {
  auto_accept?: boolean;
  peer_vpc_id: string;
  tags?: { [key: string]: string };
  vpc_id: string;
  accepter?: AwsVpcPeeringConnectionArgsAccepter;
  requester?: AwsVpcPeeringConnectionArgsRequester;
  timeouts?: AwsVpcPeeringConnectionArgsTimeouts;
}

export class aws_vpc_peering_connection extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsVpcPeeringConnectionArgs) {
    const meta = {accepter:{isBlock:true},requester:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_vpc_peering_connection", resourceName);
  }

  get accept_status(): string {
    return `${this.resourceType}.${this.resourceName}.accept_status`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get peer_owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.peer_owner_id`;
  }

  get peer_region(): string {
    return `${this.resourceType}.${this.resourceName}.peer_region`;
  }

  get peer_vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.peer_vpc_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
