import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlueSecurityConfigurationArgsEncryptionConfigurationCloudwatchEncryption {
  cloudwatch_encryption_mode?: string;
  kms_key_arn?: string;
}

export interface AwsGlueSecurityConfigurationArgsEncryptionConfigurationJobBookmarksEncryption {
  job_bookmarks_encryption_mode?: string;
  kms_key_arn?: string;
}

export interface AwsGlueSecurityConfigurationArgsEncryptionConfigurationS3Encryption {
  kms_key_arn?: string;
  s3_encryption_mode?: string;
}

export interface AwsGlueSecurityConfigurationArgsEncryptionConfiguration {
  cloudwatch_encryption: AwsGlueSecurityConfigurationArgsEncryptionConfigurationCloudwatchEncryption;
  job_bookmarks_encryption: AwsGlueSecurityConfigurationArgsEncryptionConfigurationJobBookmarksEncryption;
  s3_encryption: AwsGlueSecurityConfigurationArgsEncryptionConfigurationS3Encryption;
}

export interface AwsGlueSecurityConfigurationArgs {
  name: string;
  encryption_configuration: AwsGlueSecurityConfigurationArgsEncryptionConfiguration;
}

export class aws_glue_security_configuration extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsGlueSecurityConfigurationArgs) {
    const meta = {encryption_configuration:{isBlock:true,cloudwatch_encryption:{isBlock:true},job_bookmarks_encryption:{isBlock:true},s3_encryption:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_glue_security_configuration", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
