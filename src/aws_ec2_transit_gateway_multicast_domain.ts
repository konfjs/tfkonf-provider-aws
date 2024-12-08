import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2TransitGatewayMulticastDomainArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsEc2TransitGatewayMulticastDomainArgs {
  auto_accept_shared_associations?: string;
  igmpv2_support?: string;
  static_sources_support?: string;
  tags?: { [key: string]: string };
  transit_gateway_id: string;
  timeouts?: AwsEc2TransitGatewayMulticastDomainArgsTimeouts;
}

export class aws_ec2_transit_gateway_multicast_domain extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEc2TransitGatewayMulticastDomainArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ec2_transit_gateway_multicast_domain", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get transit_gateway_id(): string {
    return `${this.resourceType}.${this.resourceName}.transit_gateway_id`;
  }
}
