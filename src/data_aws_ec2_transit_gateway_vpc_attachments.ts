import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2TransitGatewayVpcAttachmentsArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2TransitGatewayVpcAttachmentsArgsTimeouts {
  read?: string;
}

export interface DataAwsEc2TransitGatewayVpcAttachmentsArgs {
  filter?: DataAwsEc2TransitGatewayVpcAttachmentsArgsFilter[];
  timeouts?: DataAwsEc2TransitGatewayVpcAttachmentsArgsTimeouts;
}

export class data_aws_ec2_transit_gateway_vpc_attachments extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEc2TransitGatewayVpcAttachmentsArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_transit_gateway_vpc_attachments", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.ids`;
  }
}
