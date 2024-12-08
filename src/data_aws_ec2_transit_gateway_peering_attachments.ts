import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2TransitGatewayPeeringAttachmentsArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2TransitGatewayPeeringAttachmentsArgsTimeouts {
  read?: string;
}

export interface DataAwsEc2TransitGatewayPeeringAttachmentsArgs {
  filter?: DataAwsEc2TransitGatewayPeeringAttachmentsArgsFilter[];
  timeouts?: DataAwsEc2TransitGatewayPeeringAttachmentsArgsTimeouts;
}

export class data_aws_ec2_transit_gateway_peering_attachments extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEc2TransitGatewayPeeringAttachmentsArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_transit_gateway_peering_attachments", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.ids`;
  }
}
