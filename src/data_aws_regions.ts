import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRegionsArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsRegionsArgs {
  all_regions?: boolean;
  filter?: DataAwsRegionsArgsFilter[];
}

export class data_aws_regions extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsRegionsArgs) {
    const meta = {filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_regions", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get names(): string {
    return `data.${this.resourceType}.${this.resourceName}.names`;
  }
}
