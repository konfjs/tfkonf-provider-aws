import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSagemakerImageArgs {
  description?: string;
  display_name?: string;
  image_name: string;
  role_arn: string;
  tags?: { [key: string]: string };
}

export class aws_sagemaker_image extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSagemakerImageArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_sagemaker_image", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get image_name(): string {
    return `${this.resourceType}.${this.resourceName}.image_name`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
