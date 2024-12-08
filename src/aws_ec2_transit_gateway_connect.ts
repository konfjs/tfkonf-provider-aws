import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2TransitGatewayConnectArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsEc2TransitGatewayConnectArgs {
  protocol?: string;
  tags?: { [key: string]: string };
  transit_gateway_default_route_table_association?: boolean;
  transit_gateway_default_route_table_propagation?: boolean;
  transit_gateway_id: string;
  transport_attachment_id: string;
  timeouts?: AwsEc2TransitGatewayConnectArgsTimeouts;
}

export class aws_ec2_transit_gateway_connect extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEc2TransitGatewayConnectArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ec2_transit_gateway_connect", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get transit_gateway_id(): string {
    return `${this.resourceType}.${this.resourceName}.transit_gateway_id`;
  }

  get transport_attachment_id(): string {
    return `${this.resourceType}.${this.resourceName}.transport_attachment_id`;
  }
}
