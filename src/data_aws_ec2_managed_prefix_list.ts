import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2ManagedPrefixListArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2ManagedPrefixListArgsTimeouts {
  read?: string;
}

export interface DataAwsEc2ManagedPrefixListArgs {
  filter?: DataAwsEc2ManagedPrefixListArgsFilter[];
  timeouts?: DataAwsEc2ManagedPrefixListArgsTimeouts;
}

export class data_aws_ec2_managed_prefix_list extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEc2ManagedPrefixListArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_managed_prefix_list", resourceName);
  }

  get address_family(): string {
    return `data.${this.resourceType}.${this.resourceName}.address_family`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get entries(): string {
    return `data.${this.resourceType}.${this.resourceName}.entries`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get max_entries(): string {
    return `data.${this.resourceType}.${this.resourceName}.max_entries`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get owner_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get version(): string {
    return `data.${this.resourceType}.${this.resourceName}.version`;
  }
}
