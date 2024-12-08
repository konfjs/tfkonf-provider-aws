import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2ManagedPrefixListsArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2ManagedPrefixListsArgs {
  filter?: DataAwsEc2ManagedPrefixListsArgsFilter[];
}

export class data_aws_ec2_managed_prefix_lists extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEc2ManagedPrefixListsArgs) {
    const meta = {filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_managed_prefix_lists", resourceName);
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
