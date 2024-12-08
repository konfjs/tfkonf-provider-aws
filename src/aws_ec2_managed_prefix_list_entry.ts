import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2ManagedPrefixListEntryArgs {
  cidr: string;
  description?: string;
  prefix_list_id: string;
}

export class aws_ec2_managed_prefix_list_entry extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEc2ManagedPrefixListEntryArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ec2_managed_prefix_list_entry", resourceName);
  }

  get cidr(): string {
    return `${this.resourceType}.${this.resourceName}.cidr`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get prefix_list_id(): string {
    return `${this.resourceType}.${this.resourceName}.prefix_list_id`;
  }
}
