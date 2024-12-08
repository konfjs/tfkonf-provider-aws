import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSecurityGroupsArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsSecurityGroupsArgsTimeouts {
  read?: string;
}

export interface DataAwsSecurityGroupsArgs {
  filter?: DataAwsSecurityGroupsArgsFilter[];
  timeouts?: DataAwsSecurityGroupsArgsTimeouts;
}

export class data_aws_security_groups extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsSecurityGroupsArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_security_groups", resourceName);
  }

  get arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.arns`;
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

  get vpc_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_ids`;
  }
}
