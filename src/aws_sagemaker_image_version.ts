import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSagemakerImageVersionArgs {
  base_image: string;
  image_name: string;
}

export class aws_sagemaker_image_version extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSagemakerImageVersionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_sagemaker_image_version", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get base_image(): string {
    return `${this.resourceType}.${this.resourceName}.base_image`;
  }

  get container_image(): string {
    return `${this.resourceType}.${this.resourceName}.container_image`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get image_arn(): string {
    return `${this.resourceType}.${this.resourceName}.image_arn`;
  }

  get image_name(): string {
    return `${this.resourceType}.${this.resourceName}.image_name`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
