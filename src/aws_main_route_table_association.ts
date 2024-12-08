import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMainRouteTableAssociationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsMainRouteTableAssociationArgs {
  route_table_id: string;
  vpc_id: string;
  timeouts?: AwsMainRouteTableAssociationArgsTimeouts;
}

export class aws_main_route_table_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsMainRouteTableAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_main_route_table_association", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get original_route_table_id(): string {
    return `${this.resourceType}.${this.resourceName}.original_route_table_id`;
  }

  get route_table_id(): string {
    return `${this.resourceType}.${this.resourceName}.route_table_id`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
