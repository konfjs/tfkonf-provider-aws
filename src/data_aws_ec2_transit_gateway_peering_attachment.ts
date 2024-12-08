import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2TransitGatewayPeeringAttachmentArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2TransitGatewayPeeringAttachmentArgsTimeouts {
  read?: string;
}

export interface DataAwsEc2TransitGatewayPeeringAttachmentArgs {
  filter?: DataAwsEc2TransitGatewayPeeringAttachmentArgsFilter[];
  timeouts?: DataAwsEc2TransitGatewayPeeringAttachmentArgsTimeouts;
}

export class data_aws_ec2_transit_gateway_peering_attachment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEc2TransitGatewayPeeringAttachmentArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_transit_gateway_peering_attachment", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get peer_account_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.peer_account_id`;
  }

  get peer_region(): string {
    return `data.${this.resourceType}.${this.resourceName}.peer_region`;
  }

  get peer_transit_gateway_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.peer_transit_gateway_id`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get transit_gateway_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.transit_gateway_id`;
  }
}
