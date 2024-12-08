import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsImagebuilderImagePipelinesArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsImagebuilderImagePipelinesArgs {
  filter?: DataAwsImagebuilderImagePipelinesArgsFilter[];
}

export class data_aws_imagebuilder_image_pipelines extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsImagebuilderImagePipelinesArgs) {
    const meta = {filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_imagebuilder_image_pipelines", resourceName);
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
