import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsVpcPeeringConnectionsArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsVpcPeeringConnectionsArgsTimeouts {
  read?: string;
}

export interface DataAwsVpcPeeringConnectionsArgs {
  filter?: DataAwsVpcPeeringConnectionsArgsFilter[];
  timeouts?: DataAwsVpcPeeringConnectionsArgsTimeouts;
}

export class data_aws_vpc_peering_connections extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsVpcPeeringConnectionsArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_vpc_peering_connections", resourceName);
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
