import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsImagebuilderImageRecipeArgs {
  arn: string;
}

export class data_aws_imagebuilder_image_recipe extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsImagebuilderImageRecipeArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_imagebuilder_image_recipe", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get block_device_mapping(): string {
    return `data.${this.resourceType}.${this.resourceName}.block_device_mapping`;
  }

  get component(): string {
    return `data.${this.resourceType}.${this.resourceName}.component`;
  }

  get date_created(): string {
    return `data.${this.resourceType}.${this.resourceName}.date_created`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get owner(): string {
    return `data.${this.resourceType}.${this.resourceName}.owner`;
  }

  get parent_image(): string {
    return `data.${this.resourceType}.${this.resourceName}.parent_image`;
  }

  get platform(): string {
    return `data.${this.resourceType}.${this.resourceName}.platform`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get user_data_base64(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_data_base64`;
  }

  get version(): string {
    return `data.${this.resourceType}.${this.resourceName}.version`;
  }

  get working_directory(): string {
    return `data.${this.resourceType}.${this.resourceName}.working_directory`;
  }
}
