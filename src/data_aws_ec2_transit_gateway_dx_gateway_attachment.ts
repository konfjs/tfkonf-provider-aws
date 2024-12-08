import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2TransitGatewayDxGatewayAttachmentArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2TransitGatewayDxGatewayAttachmentArgsTimeouts {
  read?: string;
}

export interface DataAwsEc2TransitGatewayDxGatewayAttachmentArgs {
  dx_gateway_id?: string;
  transit_gateway_id?: string;
  filter?: DataAwsEc2TransitGatewayDxGatewayAttachmentArgsFilter[];
  timeouts?: DataAwsEc2TransitGatewayDxGatewayAttachmentArgsTimeouts;
}

export class data_aws_ec2_transit_gateway_dx_gateway_attachment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEc2TransitGatewayDxGatewayAttachmentArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_transit_gateway_dx_gateway_attachment", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
