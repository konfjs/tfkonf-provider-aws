import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsKendraExperienceArgsConfigurationContentSourceConfiguration {
  data_source_ids?: string[];
  direct_put_content?: boolean;
  faq_ids?: string[];
}

export interface AwsKendraExperienceArgsConfigurationUserIdentityConfiguration {
  identity_attribute_name: string;
}

export interface AwsKendraExperienceArgsConfiguration {
  content_source_configuration?: AwsKendraExperienceArgsConfigurationContentSourceConfiguration;
  user_identity_configuration?: AwsKendraExperienceArgsConfigurationUserIdentityConfiguration;
}

export interface AwsKendraExperienceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsKendraExperienceArgs {
  description?: string;
  index_id: string;
  name: string;
  role_arn: string;
  configuration?: AwsKendraExperienceArgsConfiguration;
  timeouts?: AwsKendraExperienceArgsTimeouts;
}

export class aws_kendra_experience extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsKendraExperienceArgs) {
    const meta = {configuration:{isBlock:true,content_source_configuration:{isBlock:true},user_identity_configuration:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_kendra_experience", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get endpoints(): string {
    return `${this.resourceType}.${this.resourceName}.endpoints`;
  }

  get experience_id(): string {
    return `${this.resourceType}.${this.resourceName}.experience_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get index_id(): string {
    return `${this.resourceType}.${this.resourceName}.index_id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }
}
