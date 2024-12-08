import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2TransitGatewayArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2TransitGatewayArgsTimeouts {
  read?: string;
}

export interface DataAwsEc2TransitGatewayArgs {
  filter?: DataAwsEc2TransitGatewayArgsFilter[];
  timeouts?: DataAwsEc2TransitGatewayArgsTimeouts;
}

export class data_aws_ec2_transit_gateway extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEc2TransitGatewayArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_transit_gateway", resourceName);
  }

  get amazon_side_asn(): string {
    return `data.${this.resourceType}.${this.resourceName}.amazon_side_asn`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get association_default_route_table_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.association_default_route_table_id`;
  }

  get auto_accept_shared_attachments(): string {
    return `data.${this.resourceType}.${this.resourceName}.auto_accept_shared_attachments`;
  }

  get default_route_table_association(): string {
    return `data.${this.resourceType}.${this.resourceName}.default_route_table_association`;
  }

  get default_route_table_propagation(): string {
    return `data.${this.resourceType}.${this.resourceName}.default_route_table_propagation`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get dns_support(): string {
    return `data.${this.resourceType}.${this.resourceName}.dns_support`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get multicast_support(): string {
    return `data.${this.resourceType}.${this.resourceName}.multicast_support`;
  }

  get owner_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get propagation_default_route_table_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.propagation_default_route_table_id`;
  }

  get security_group_referencing_support(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_group_referencing_support`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get transit_gateway_cidr_blocks(): string {
    return `data.${this.resourceType}.${this.resourceName}.transit_gateway_cidr_blocks`;
  }

  get vpn_ecmp_support(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpn_ecmp_support`;
  }
}
