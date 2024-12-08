import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsImagebuilderImageArgs {
  arn: string;
}

export class data_aws_imagebuilder_image extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsImagebuilderImageArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_imagebuilder_image", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get build_version_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.build_version_arn`;
  }

  get container_recipe_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.container_recipe_arn`;
  }

  get date_created(): string {
    return `data.${this.resourceType}.${this.resourceName}.date_created`;
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

  get os_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.os_version`;
  }

  get output_resources(): string {
    return `data.${this.resourceType}.${this.resourceName}.output_resources`;
  }

  get platform(): string {
    return `data.${this.resourceType}.${this.resourceName}.platform`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get version(): string {
    return `data.${this.resourceType}.${this.resourceName}.version`;
  }
}
