import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2TransitGatewayAttachmentsArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2TransitGatewayAttachmentsArgsTimeouts {
  read?: string;
}

export interface DataAwsEc2TransitGatewayAttachmentsArgs {
  filter?: DataAwsEc2TransitGatewayAttachmentsArgsFilter[];
  timeouts?: DataAwsEc2TransitGatewayAttachmentsArgsTimeouts;
}

export class data_aws_ec2_transit_gateway_attachments extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEc2TransitGatewayAttachmentsArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_transit_gateway_attachments", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.ids`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
