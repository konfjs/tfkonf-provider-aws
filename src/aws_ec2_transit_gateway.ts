import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2TransitGatewayArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsEc2TransitGatewayArgs {
  amazon_side_asn?: number;
  auto_accept_shared_attachments?: string;
  default_route_table_association?: string;
  default_route_table_propagation?: string;
  description?: string;
  dns_support?: string;
  multicast_support?: string;
  security_group_referencing_support?: string;
  tags?: { [key: string]: string };
  transit_gateway_cidr_blocks?: string[];
  vpn_ecmp_support?: string;
  timeouts?: AwsEc2TransitGatewayArgsTimeouts;
}

export class aws_ec2_transit_gateway extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEc2TransitGatewayArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ec2_transit_gateway", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get association_default_route_table_id(): string {
    return `${this.resourceType}.${this.resourceName}.association_default_route_table_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get propagation_default_route_table_id(): string {
    return `${this.resourceType}.${this.resourceName}.propagation_default_route_table_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
