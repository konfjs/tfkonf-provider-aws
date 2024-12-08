import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2TransitGatewayConnectArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2TransitGatewayConnectArgsTimeouts {
  read?: string;
}

export interface DataAwsEc2TransitGatewayConnectArgs {
  filter?: DataAwsEc2TransitGatewayConnectArgsFilter[];
  timeouts?: DataAwsEc2TransitGatewayConnectArgsTimeouts;
}

export class data_aws_ec2_transit_gateway_connect extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEc2TransitGatewayConnectArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_transit_gateway_connect", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get protocol(): string {
    return `data.${this.resourceType}.${this.resourceName}.protocol`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get transit_gateway_connect_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.transit_gateway_connect_id`;
  }

  get transit_gateway_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.transit_gateway_id`;
  }

  get transport_attachment_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.transport_attachment_id`;
  }
}
