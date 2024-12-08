import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpnGatewayAttachmentArgs {
  vpc_id: string;
  vpn_gateway_id: string;
}

export class aws_vpn_gateway_attachment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsVpnGatewayAttachmentArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_vpn_gateway_attachment", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }

  get vpn_gateway_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpn_gateway_id`;
  }
}
