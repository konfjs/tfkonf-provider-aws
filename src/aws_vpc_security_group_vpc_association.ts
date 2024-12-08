import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcSecurityGroupVpcAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsVpcSecurityGroupVpcAssociationArgs {
  security_group_id: string;
  vpc_id: string;
  timeouts?: AwsVpcSecurityGroupVpcAssociationArgsTimeouts;
}

export class aws_vpc_security_group_vpc_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsVpcSecurityGroupVpcAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_vpc_security_group_vpc_association", resourceName);
  }

  get security_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.security_group_id`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
