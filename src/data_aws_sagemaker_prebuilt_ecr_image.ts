import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSagemakerPrebuiltEcrImageArgs {
  dns_suffix?: string;
  image_tag?: string;
  region?: string;
  repository_name: string;
}

export class data_aws_sagemaker_prebuilt_ecr_image extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsSagemakerPrebuiltEcrImageArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_sagemaker_prebuilt_ecr_image", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get registry_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.registry_id`;
  }

  get registry_path(): string {
    return `data.${this.resourceType}.${this.resourceName}.registry_path`;
  }

  get repository_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.repository_name`;
  }
}
