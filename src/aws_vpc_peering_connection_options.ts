import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcPeeringConnectionOptionsArgsAccepter {
  allow_remote_vpc_dns_resolution?: boolean;
}

export interface AwsVpcPeeringConnectionOptionsArgsRequester {
  allow_remote_vpc_dns_resolution?: boolean;
}

export interface AwsVpcPeeringConnectionOptionsArgs {
  vpc_peering_connection_id: string;
  accepter?: AwsVpcPeeringConnectionOptionsArgsAccepter;
  requester?: AwsVpcPeeringConnectionOptionsArgsRequester;
}

export class aws_vpc_peering_connection_options extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsVpcPeeringConnectionOptionsArgs) {
    const meta = {accepter:{isBlock:true},requester:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_vpc_peering_connection_options", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get vpc_peering_connection_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_peering_connection_id`;
  }
}
