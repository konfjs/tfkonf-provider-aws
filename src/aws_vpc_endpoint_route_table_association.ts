import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcEndpointRouteTableAssociationArgs {
  route_table_id: string;
  vpc_endpoint_id: string;
}

export class aws_vpc_endpoint_route_table_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsVpcEndpointRouteTableAssociationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_vpc_endpoint_route_table_association", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get route_table_id(): string {
    return `${this.resourceType}.${this.resourceName}.route_table_id`;
  }

  get vpc_endpoint_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_endpoint_id`;
  }
}
