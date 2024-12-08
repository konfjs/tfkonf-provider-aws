import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2ManagedPrefixListArgsEntry {
  cidr: string;
  description?: string;
}

export interface AwsEc2ManagedPrefixListArgs {
  address_family: string;
  max_entries: number;
  name: string;
  tags?: { [key: string]: string };
  entry?: AwsEc2ManagedPrefixListArgsEntry[];
}

export class aws_ec2_managed_prefix_list extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEc2ManagedPrefixListArgs) {
    const meta = {entry:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ec2_managed_prefix_list", resourceName);
  }

  get address_family(): string {
    return `${this.resourceType}.${this.resourceName}.address_family`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get max_entries(): string {
    return `${this.resourceType}.${this.resourceName}.max_entries`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
