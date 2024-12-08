import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSsmInstancesArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsSsmInstancesArgs {
  filter?: DataAwsSsmInstancesArgsFilter[];
}

export class data_aws_ssm_instances extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsSsmInstancesArgs) {
    const meta = {filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ssm_instances", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.ids`;
  }
}
