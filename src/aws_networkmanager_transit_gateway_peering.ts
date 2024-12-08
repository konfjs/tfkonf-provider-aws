import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkmanagerTransitGatewayPeeringArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsNetworkmanagerTransitGatewayPeeringArgs {
  core_network_id: string;
  tags?: { [key: string]: string };
  transit_gateway_arn: string;
  timeouts?: AwsNetworkmanagerTransitGatewayPeeringArgsTimeouts;
}

export class aws_networkmanager_transit_gateway_peering extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsNetworkmanagerTransitGatewayPeeringArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_networkmanager_transit_gateway_peering", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get core_network_arn(): string {
    return `${this.resourceType}.${this.resourceName}.core_network_arn`;
  }

  get core_network_id(): string {
    return `${this.resourceType}.${this.resourceName}.core_network_id`;
  }

  get edge_location(): string {
    return `${this.resourceType}.${this.resourceName}.edge_location`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get owner_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_account_id`;
  }

  get peering_type(): string {
    return `${this.resourceType}.${this.resourceName}.peering_type`;
  }

  get resource_arn(): string {
    return `${this.resourceType}.${this.resourceName}.resource_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get transit_gateway_arn(): string {
    return `${this.resourceType}.${this.resourceName}.transit_gateway_arn`;
  }

  get transit_gateway_peering_attachment_id(): string {
    return `${this.resourceType}.${this.resourceName}.transit_gateway_peering_attachment_id`;
  }
}
