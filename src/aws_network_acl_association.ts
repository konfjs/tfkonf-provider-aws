import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkAclAssociationArgs {
  network_acl_id: string;
  subnet_id: string;
}

export class aws_network_acl_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsNetworkAclAssociationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_network_acl_association", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get network_acl_id(): string {
    return `${this.resourceType}.${this.resourceName}.network_acl_id`;
  }

  get subnet_id(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_id`;
  }
}
