import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsImagebuilderComponentsArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsImagebuilderComponentsArgs {
  owner?: string;
  filter?: DataAwsImagebuilderComponentsArgsFilter[];
}

export class data_aws_imagebuilder_components extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsImagebuilderComponentsArgs) {
    const meta = {filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_imagebuilder_components", resourceName);
  }

  get arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.arns`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get names(): string {
    return `data.${this.resourceType}.${this.resourceName}.names`;
  }
}
