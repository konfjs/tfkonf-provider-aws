import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcEndpointSubnetAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsVpcEndpointSubnetAssociationArgs {
  subnet_id: string;
  vpc_endpoint_id: string;
  timeouts?: AwsVpcEndpointSubnetAssociationArgsTimeouts;
}

export class aws_vpc_endpoint_subnet_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsVpcEndpointSubnetAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_vpc_endpoint_subnet_association", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get subnet_id(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_id`;
  }

  get vpc_endpoint_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_endpoint_id`;
  }
}
