import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsAmiIdsArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsAmiIdsArgsTimeouts {
  read?: string;
}

export interface DataAwsAmiIdsArgs {
  executable_users?: string[];
  include_deprecated?: boolean;
  name_regex?: string;
  owners: string[];
  sort_ascending?: boolean;
  filter?: DataAwsAmiIdsArgsFilter[];
  timeouts?: DataAwsAmiIdsArgsTimeouts;
}

export class data_aws_ami_ids extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsAmiIdsArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ami_ids", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.ids`;
  }

  get owners(): string {
    return `data.${this.resourceType}.${this.resourceName}.owners`;
  }
}
