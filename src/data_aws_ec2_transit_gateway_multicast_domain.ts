import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2TransitGatewayMulticastDomainArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2TransitGatewayMulticastDomainArgsTimeouts {
  read?: string;
}

export interface DataAwsEc2TransitGatewayMulticastDomainArgs {
  filter?: DataAwsEc2TransitGatewayMulticastDomainArgsFilter[];
  timeouts?: DataAwsEc2TransitGatewayMulticastDomainArgsTimeouts;
}

export class data_aws_ec2_transit_gateway_multicast_domain extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEc2TransitGatewayMulticastDomainArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_transit_gateway_multicast_domain", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get associations(): string {
    return `data.${this.resourceType}.${this.resourceName}.associations`;
  }

  get auto_accept_shared_associations(): string {
    return `data.${this.resourceType}.${this.resourceName}.auto_accept_shared_associations`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get igmpv2_support(): string {
    return `data.${this.resourceType}.${this.resourceName}.igmpv2_support`;
  }

  get members(): string {
    return `data.${this.resourceType}.${this.resourceName}.members`;
  }

  get owner_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get sources(): string {
    return `data.${this.resourceType}.${this.resourceName}.sources`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get static_sources_support(): string {
    return `data.${this.resourceType}.${this.resourceName}.static_sources_support`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get transit_gateway_attachment_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.transit_gateway_attachment_id`;
  }

  get transit_gateway_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.transit_gateway_id`;
  }

  get transit_gateway_multicast_domain_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.transit_gateway_multicast_domain_id`;
  }
}
