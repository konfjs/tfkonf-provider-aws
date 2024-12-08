import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSagemakerModelPackageGroupArgs {
  model_package_group_description?: string;
  model_package_group_name: string;
  tags?: { [key: string]: string };
}

export class aws_sagemaker_model_package_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSagemakerModelPackageGroupArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_sagemaker_model_package_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get model_package_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.model_package_group_name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
