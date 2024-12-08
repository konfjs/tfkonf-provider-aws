import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsInstancesArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsInstancesArgsTimeouts {
  read?: string;
}

export interface DataAwsInstancesArgs {
  instance_state_names?: string[];
  filter?: DataAwsInstancesArgsFilter[];
  timeouts?: DataAwsInstancesArgsTimeouts;
}

export class data_aws_instances extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsInstancesArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_instances", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.ids`;
  }

  get instance_tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_tags`;
  }

  get ipv6_addresses(): string {
    return `data.${this.resourceType}.${this.resourceName}.ipv6_addresses`;
  }

  get private_ips(): string {
    return `data.${this.resourceType}.${this.resourceName}.private_ips`;
  }

  get public_ips(): string {
    return `data.${this.resourceType}.${this.resourceName}.public_ips`;
  }
}
