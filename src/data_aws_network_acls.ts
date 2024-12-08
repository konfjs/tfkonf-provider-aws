import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsNetworkAclsArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsNetworkAclsArgsTimeouts {
  read?: string;
}

export interface DataAwsNetworkAclsArgs {
  vpc_id?: string;
  filter?: DataAwsNetworkAclsArgsFilter[];
  timeouts?: DataAwsNetworkAclsArgsTimeouts;
}

export class data_aws_network_acls extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsNetworkAclsArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_network_acls", resourceName);
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
