import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEipsArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEipsArgsTimeouts {
  read?: string;
}

export interface DataAwsEipsArgs {
  tags?: { [key: string]: string };
  filter?: DataAwsEipsArgsFilter[];
  timeouts?: DataAwsEipsArgsTimeouts;
}

export class data_aws_eips extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEipsArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_eips", resourceName);
  }

  get allocation_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.allocation_ids`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get public_ips(): string {
    return `data.${this.resourceType}.${this.resourceName}.public_ips`;
  }
}
