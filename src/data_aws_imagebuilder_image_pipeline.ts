import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsImagebuilderImagePipelineArgs {
  arn: string;
}

export class data_aws_imagebuilder_image_pipeline extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsImagebuilderImagePipelineArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_imagebuilder_image_pipeline", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get container_recipe_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.container_recipe_arn`;
  }

  get date_created(): string {
    return `data.${this.resourceType}.${this.resourceName}.date_created`;
  }

  get date_last_run(): string {
    return `data.${this.resourceType}.${this.resourceName}.date_last_run`;
  }

  get date_next_run(): string {
    return `data.${this.resourceType}.${this.resourceName}.date_next_run`;
  }

  get date_updated(): string {
    return `data.${this.resourceType}.${this.resourceName}.date_updated`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get distribution_configuration_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.distribution_configuration_arn`;
  }

  get enhanced_image_metadata_enabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.enhanced_image_metadata_enabled`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get image_recipe_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.image_recipe_arn`;
  }

  get image_scanning_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.image_scanning_configuration`;
  }

  get image_tests_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.image_tests_configuration`;
  }

  get infrastructure_configuration_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.infrastructure_configuration_arn`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get platform(): string {
    return `data.${this.resourceType}.${this.resourceName}.platform`;
  }

  get schedule(): string {
    return `data.${this.resourceType}.${this.resourceName}.schedule`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
