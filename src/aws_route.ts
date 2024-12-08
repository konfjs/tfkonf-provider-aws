import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRouteArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsRouteArgs {
  carrier_gateway_id?: string;
  core_network_arn?: string;
  destination_cidr_block?: string;
  destination_ipv6_cidr_block?: string;
  destination_prefix_list_id?: string;
  egress_only_gateway_id?: string;
  gateway_id?: string;
  local_gateway_id?: string;
  nat_gateway_id?: string;
  route_table_id: string;
  transit_gateway_id?: string;
  vpc_endpoint_id?: string;
  vpc_peering_connection_id?: string;
  timeouts?: AwsRouteArgsTimeouts;
}

export class aws_route extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRouteArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_route", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get instance_owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.instance_owner_id`;
  }

  get network_interface_id(): string {
    return `${this.resourceType}.${this.resourceName}.network_interface_id`;
  }

  get origin(): string {
    return `${this.resourceType}.${this.resourceName}.origin`;
  }

  get route_table_id(): string {
    return `${this.resourceType}.${this.resourceName}.route_table_id`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }
}
