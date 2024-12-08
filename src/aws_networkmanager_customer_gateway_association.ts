import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkmanagerCustomerGatewayAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsNetworkmanagerCustomerGatewayAssociationArgs {
  customer_gateway_arn: string;
  device_id: string;
  global_network_id: string;
  link_id?: string;
  timeouts?: AwsNetworkmanagerCustomerGatewayAssociationArgsTimeouts;
}

export class aws_networkmanager_customer_gateway_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsNetworkmanagerCustomerGatewayAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_networkmanager_customer_gateway_association", resourceName);
  }

  get customer_gateway_arn(): string {
    return `${this.resourceType}.${this.resourceName}.customer_gateway_arn`;
  }

  get device_id(): string {
    return `${this.resourceType}.${this.resourceName}.device_id`;
  }

  get global_network_id(): string {
    return `${this.resourceType}.${this.resourceName}.global_network_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
