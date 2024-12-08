import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEcrRepositoryCreationTemplateArgs {
  prefix: string;
}

export class data_aws_ecr_repository_creation_template extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEcrRepositoryCreationTemplateArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_ecr_repository_creation_template", resourceName);
  }

  get applied_for(): string {
    return `data.${this.resourceType}.${this.resourceName}.applied_for`;
  }

  get custom_role_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.custom_role_arn`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get encryption_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.encryption_configuration`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get image_tag_mutability(): string {
    return `data.${this.resourceType}.${this.resourceName}.image_tag_mutability`;
  }

  get lifecycle_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.lifecycle_policy`;
  }

  get prefix(): string {
    return `data.${this.resourceType}.${this.resourceName}.prefix`;
  }

  get registry_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.registry_id`;
  }

  get repository_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.repository_policy`;
  }

  get resource_tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.resource_tags`;
  }
}
