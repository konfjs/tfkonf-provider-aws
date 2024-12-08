import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsElastictranscoderPipelineArgsContentConfig {
  storage_class?: string;
}

export interface AwsElastictranscoderPipelineArgsContentConfigPermissions {
  access?: string[];
  grantee?: string;
  grantee_type?: string;
}

export interface AwsElastictranscoderPipelineArgsNotifications {
  completed?: string;
  error?: string;
  progressing?: string;
  warning?: string;
}

export interface AwsElastictranscoderPipelineArgsThumbnailConfig {
  storage_class?: string;
}

export interface AwsElastictranscoderPipelineArgsThumbnailConfigPermissions {
  access?: string[];
  grantee?: string;
  grantee_type?: string;
}

export interface AwsElastictranscoderPipelineArgs {
  aws_kms_key_arn?: string;
  input_bucket: string;
  role: string;
  content_config?: AwsElastictranscoderPipelineArgsContentConfig;
  content_config_permissions?: AwsElastictranscoderPipelineArgsContentConfigPermissions[];
  notifications?: AwsElastictranscoderPipelineArgsNotifications;
  thumbnail_config?: AwsElastictranscoderPipelineArgsThumbnailConfig;
  thumbnail_config_permissions?: AwsElastictranscoderPipelineArgsThumbnailConfigPermissions[];
}

export class aws_elastictranscoder_pipeline extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsElastictranscoderPipelineArgs) {
    const meta = {content_config:{isBlock:true},content_config_permissions:{isBlock:true},notifications:{isBlock:true},thumbnail_config:{isBlock:true},thumbnail_config_permissions:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_elastictranscoder_pipeline", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get input_bucket(): string {
    return `${this.resourceType}.${this.resourceName}.input_bucket`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get output_bucket(): string {
    return `${this.resourceType}.${this.resourceName}.output_bucket`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
