import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsChimesdkvoiceVoiceProfileDomainArgsServerSideEncryptionConfiguration {
  kms_key_arn: string;
}

export interface AwsChimesdkvoiceVoiceProfileDomainArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsChimesdkvoiceVoiceProfileDomainArgs {
  description?: string;
  name: string;
  tags?: { [key: string]: string };
  server_side_encryption_configuration: AwsChimesdkvoiceVoiceProfileDomainArgsServerSideEncryptionConfiguration;
  timeouts?: AwsChimesdkvoiceVoiceProfileDomainArgsTimeouts;
}

export class aws_chimesdkvoice_voice_profile_domain extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsChimesdkvoiceVoiceProfileDomainArgs) {
    const meta = {server_side_encryption_configuration:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_chimesdkvoice_voice_profile_domain", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
