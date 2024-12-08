import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsImagebuilderContainerRecipesArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsImagebuilderContainerRecipesArgs {
  owner?: string;
  filter?: DataAwsImagebuilderContainerRecipesArgsFilter[];
}

export class data_aws_imagebuilder_container_recipes extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsImagebuilderContainerRecipesArgs) {
    const meta = {filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_imagebuilder_container_recipes", resourceName);
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
