import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudfrontFieldLevelEncryptionConfigArgsContentTypeProfileConfigContentTypeProfilesItems {
  content_type: string;
  format: string;
  profile_id?: string;
}

export interface AwsCloudfrontFieldLevelEncryptionConfigArgsContentTypeProfileConfigContentTypeProfiles {
  items: AwsCloudfrontFieldLevelEncryptionConfigArgsContentTypeProfileConfigContentTypeProfilesItems[];
}

export interface AwsCloudfrontFieldLevelEncryptionConfigArgsContentTypeProfileConfig {
  forward_when_content_type_is_unknown: boolean;
  content_type_profiles: AwsCloudfrontFieldLevelEncryptionConfigArgsContentTypeProfileConfigContentTypeProfiles;
}

export interface AwsCloudfrontFieldLevelEncryptionConfigArgsQueryArgProfileConfigQueryArgProfilesItems {
  profile_id: string;
  query_arg: string;
}

export interface AwsCloudfrontFieldLevelEncryptionConfigArgsQueryArgProfileConfigQueryArgProfiles {
  items?: AwsCloudfrontFieldLevelEncryptionConfigArgsQueryArgProfileConfigQueryArgProfilesItems[];
}

export interface AwsCloudfrontFieldLevelEncryptionConfigArgsQueryArgProfileConfig {
  forward_when_query_arg_profile_is_unknown: boolean;
  query_arg_profiles?: AwsCloudfrontFieldLevelEncryptionConfigArgsQueryArgProfileConfigQueryArgProfiles;
}

export interface AwsCloudfrontFieldLevelEncryptionConfigArgs {
  comment?: string;
  content_type_profile_config: AwsCloudfrontFieldLevelEncryptionConfigArgsContentTypeProfileConfig;
  query_arg_profile_config: AwsCloudfrontFieldLevelEncryptionConfigArgsQueryArgProfileConfig;
}

export class aws_cloudfront_field_level_encryption_config extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCloudfrontFieldLevelEncryptionConfigArgs) {
    const meta = {content_type_profile_config:{isBlock:true,content_type_profiles:{isBlock:true,items:{isBlock:true}}},query_arg_profile_config:{isBlock:true,query_arg_profiles:{isBlock:true,items:{isBlock:true}}}};
    super(terraformConfig, "resource", args, meta, "aws_cloudfront_field_level_encryption_config", resourceName);
  }

  get caller_reference(): string {
    return `${this.resourceType}.${this.resourceName}.caller_reference`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
