import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEbsVolumesArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEbsVolumesArgsTimeouts {
  read?: string;
}

export interface DataAwsEbsVolumesArgs {
  tags?: { [key: string]: string };
  filter?: DataAwsEbsVolumesArgsFilter[];
  timeouts?: DataAwsEbsVolumesArgsTimeouts;
}

export class data_aws_ebs_volumes extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEbsVolumesArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ebs_volumes", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.ids`;
  }
}
