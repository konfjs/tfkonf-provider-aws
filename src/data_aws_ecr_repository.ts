import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEcrRepositoryArgs {
  name: string;
}

export class data_aws_ecr_repository extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEcrRepositoryArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_ecr_repository", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get encryption_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.encryption_configuration`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get image_scanning_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.image_scanning_configuration`;
  }

  get image_tag_mutability(): string {
    return `data.${this.resourceType}.${this.resourceName}.image_tag_mutability`;
  }

  get most_recent_image_tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.most_recent_image_tags`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get registry_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.registry_id`;
  }

  get repository_url(): string {
    return `data.${this.resourceType}.${this.resourceName}.repository_url`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
