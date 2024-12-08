import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2TransitGatewayVpcAttachmentArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2TransitGatewayVpcAttachmentArgsTimeouts {
  read?: string;
}

export interface DataAwsEc2TransitGatewayVpcAttachmentArgs {
  filter?: DataAwsEc2TransitGatewayVpcAttachmentArgsFilter[];
  timeouts?: DataAwsEc2TransitGatewayVpcAttachmentArgsTimeouts;
}

export class data_aws_ec2_transit_gateway_vpc_attachment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEc2TransitGatewayVpcAttachmentArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_transit_gateway_vpc_attachment", resourceName);
  }

  get appliance_mode_support(): string {
    return `data.${this.resourceType}.${this.resourceName}.appliance_mode_support`;
  }

  get dns_support(): string {
    return `data.${this.resourceType}.${this.resourceName}.dns_support`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ipv6_support(): string {
    return `data.${this.resourceType}.${this.resourceName}.ipv6_support`;
  }

  get security_group_referencing_support(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_group_referencing_support`;
  }

  get subnet_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnet_ids`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get transit_gateway_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.transit_gateway_id`;
  }

  get vpc_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_id`;
  }

  get vpc_owner_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_owner_id`;
  }
}
