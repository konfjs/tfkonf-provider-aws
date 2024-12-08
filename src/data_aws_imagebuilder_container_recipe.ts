import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsImagebuilderContainerRecipeArgs {
  arn: string;
}

export class data_aws_imagebuilder_container_recipe extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsImagebuilderContainerRecipeArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_imagebuilder_container_recipe", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get component(): string {
    return `data.${this.resourceType}.${this.resourceName}.component`;
  }

  get container_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.container_type`;
  }

  get date_created(): string {
    return `data.${this.resourceType}.${this.resourceName}.date_created`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get dockerfile_template_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.dockerfile_template_data`;
  }

  get encrypted(): string {
    return `data.${this.resourceType}.${this.resourceName}.encrypted`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_configuration`;
  }

  get kms_key_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_id`;
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

  get target_repository(): string {
    return `data.${this.resourceType}.${this.resourceName}.target_repository`;
  }

  get version(): string {
    return `data.${this.resourceType}.${this.resourceName}.version`;
  }

  get working_directory(): string {
    return `data.${this.resourceType}.${this.resourceName}.working_directory`;
  }
}
