import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcPeeringConnectionAccepterArgsAccepter {
  allow_remote_vpc_dns_resolution?: boolean;
}

export interface AwsVpcPeeringConnectionAccepterArgsRequester {
  allow_remote_vpc_dns_resolution?: boolean;
}

export interface AwsVpcPeeringConnectionAccepterArgsTimeouts {
  create?: string;
  update?: string;
}

export interface AwsVpcPeeringConnectionAccepterArgs {
  auto_accept?: boolean;
  tags?: { [key: string]: string };
  vpc_peering_connection_id: string;
  accepter?: AwsVpcPeeringConnectionAccepterArgsAccepter;
  requester?: AwsVpcPeeringConnectionAccepterArgsRequester;
  timeouts?: AwsVpcPeeringConnectionAccepterArgsTimeouts;
}

export class aws_vpc_peering_connection_accepter extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsVpcPeeringConnectionAccepterArgs) {
    const meta = {accepter:{isBlock:true},requester:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_vpc_peering_connection_accepter", resourceName);
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

  get vpc_peering_connection_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_peering_connection_id`;
  }
}
