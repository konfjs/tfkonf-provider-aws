import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsVpnGatewayArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsVpnGatewayArgsTimeouts {
  read?: string;
}

export interface DataAwsVpnGatewayArgs {
  filter?: DataAwsVpnGatewayArgsFilter[];
  timeouts?: DataAwsVpnGatewayArgsTimeouts;
}

export class data_aws_vpn_gateway extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsVpnGatewayArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_vpn_gateway", resourceName);
  }

  get amazon_side_asn(): string {
    return `data.${this.resourceType}.${this.resourceName}.amazon_side_asn`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get attached_vpc_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.attached_vpc_id`;
  }

  get availability_zone(): string {
    return `data.${this.resourceType}.${this.resourceName}.availability_zone`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
