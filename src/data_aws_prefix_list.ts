import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsPrefixListArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsPrefixListArgsTimeouts {
  read?: string;
}

export interface DataAwsPrefixListArgs {
  prefix_list_id?: string;
  filter?: DataAwsPrefixListArgsFilter[];
  timeouts?: DataAwsPrefixListArgsTimeouts;
}

export class data_aws_prefix_list extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsPrefixListArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_prefix_list", resourceName);
  }

  get cidr_blocks(): string {
    return `data.${this.resourceType}.${this.resourceName}.cidr_blocks`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }
}
