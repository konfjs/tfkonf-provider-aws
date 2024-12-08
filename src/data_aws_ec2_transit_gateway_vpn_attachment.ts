import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2TransitGatewayVpnAttachmentArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2TransitGatewayVpnAttachmentArgsTimeouts {
  read?: string;
}

export interface DataAwsEc2TransitGatewayVpnAttachmentArgs {
  transit_gateway_id?: string;
  vpn_connection_id?: string;
  filter?: DataAwsEc2TransitGatewayVpnAttachmentArgsFilter[];
  timeouts?: DataAwsEc2TransitGatewayVpnAttachmentArgsTimeouts;
}

export class data_aws_ec2_transit_gateway_vpn_attachment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEc2TransitGatewayVpnAttachmentArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_transit_gateway_vpn_attachment", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
