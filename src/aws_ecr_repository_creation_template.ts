import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEcrRepositoryCreationTemplateArgsEncryptionConfiguration {
  encryption_type?: string;
}

export interface AwsEcrRepositoryCreationTemplateArgs {
  applied_for: string[];
  custom_role_arn?: string;
  description?: string;
  image_tag_mutability?: string;
  lifecycle_policy?: string;
  prefix: string;
  repository_policy?: string;
  resource_tags?: { [key: string]: string };
  encryption_configuration?: AwsEcrRepositoryCreationTemplateArgsEncryptionConfiguration[];
}

export class aws_ecr_repository_creation_template extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEcrRepositoryCreationTemplateArgs) {
    const meta = {encryption_configuration:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ecr_repository_creation_template", resourceName);
  }

  get applied_for(): string {
    return `${this.resourceType}.${this.resourceName}.applied_for`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get prefix(): string {
    return `${this.resourceType}.${this.resourceName}.prefix`;
  }

  get registry_id(): string {
    return `${this.resourceType}.${this.resourceName}.registry_id`;
  }
}
