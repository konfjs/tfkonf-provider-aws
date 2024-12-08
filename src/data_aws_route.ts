import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRouteArgsTimeouts {
  read?: string;
}

export interface DataAwsRouteArgs {
  route_table_id: string;
  timeouts?: DataAwsRouteArgsTimeouts;
}

export class data_aws_route extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsRouteArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_route", resourceName);
  }

  get carrier_gateway_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.carrier_gateway_id`;
  }

  get core_network_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.core_network_arn`;
  }

  get destination_cidr_block(): string {
    return `data.${this.resourceType}.${this.resourceName}.destination_cidr_block`;
  }

  get destination_ipv6_cidr_block(): string {
    return `data.${this.resourceType}.${this.resourceName}.destination_ipv6_cidr_block`;
  }

  get destination_prefix_list_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.destination_prefix_list_id`;
  }

  get egress_only_gateway_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.egress_only_gateway_id`;
  }

  get gateway_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.gateway_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get local_gateway_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.local_gateway_id`;
  }

  get nat_gateway_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.nat_gateway_id`;
  }

  get network_interface_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.network_interface_id`;
  }

  get route_table_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.route_table_id`;
  }

  get transit_gateway_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.transit_gateway_id`;
  }

  get vpc_peering_connection_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_peering_connection_id`;
  }
}
