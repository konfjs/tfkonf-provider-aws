import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcEndpointSecurityGroupAssociationArgs {
  replace_default_association?: boolean;
  security_group_id: string;
  vpc_endpoint_id: string;
}

export class aws_vpc_endpoint_security_group_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsVpcEndpointSecurityGroupAssociationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_vpc_endpoint_security_group_association", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get security_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.security_group_id`;
  }

  get vpc_endpoint_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_endpoint_id`;
  }
}
