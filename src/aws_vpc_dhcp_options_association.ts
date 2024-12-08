import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcDhcpOptionsAssociationArgs {
  dhcp_options_id: string;
  vpc_id: string;
}

export class aws_vpc_dhcp_options_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsVpcDhcpOptionsAssociationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_vpc_dhcp_options_association", resourceName);
  }

  get dhcp_options_id(): string {
    return `${this.resourceType}.${this.resourceName}.dhcp_options_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
