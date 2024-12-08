import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRouteTableAssociationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsRouteTableAssociationArgs {
  gateway_id?: string;
  route_table_id: string;
  subnet_id?: string;
  timeouts?: AwsRouteTableAssociationArgsTimeouts;
}

export class aws_route_table_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRouteTableAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_route_table_association", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get route_table_id(): string {
    return `${this.resourceType}.${this.resourceName}.route_table_id`;
  }
}
