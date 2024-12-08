import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsImagebuilderImageRecipesArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsImagebuilderImageRecipesArgs {
  owner?: string;
  filter?: DataAwsImagebuilderImageRecipesArgsFilter[];
}

export class data_aws_imagebuilder_image_recipes extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsImagebuilderImageRecipesArgs) {
    const meta = {filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_imagebuilder_image_recipes", resourceName);
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
