import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2TransitGatewayPrefixListReferenceArgs {
  blackhole?: boolean;
  prefix_list_id: string;
  transit_gateway_attachment_id?: string;
  transit_gateway_route_table_id: string;
}

export class aws_ec2_transit_gateway_prefix_list_reference extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEc2TransitGatewayPrefixListReferenceArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ec2_transit_gateway_prefix_list_reference", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get prefix_list_id(): string {
    return `${this.resourceType}.${this.resourceName}.prefix_list_id`;
  }

  get prefix_list_owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.prefix_list_owner_id`;
  }

  get transit_gateway_route_table_id(): string {
    return `${this.resourceType}.${this.resourceName}.transit_gateway_route_table_id`;
  }
}
