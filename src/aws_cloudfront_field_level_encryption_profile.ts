import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudfrontFieldLevelEncryptionProfileArgsEncryptionEntitiesItemsFieldPatterns {
  items?: string[];
}

export interface AwsCloudfrontFieldLevelEncryptionProfileArgsEncryptionEntitiesItems {
  provider_id: string;
  public_key_id: string;
  field_patterns: AwsCloudfrontFieldLevelEncryptionProfileArgsEncryptionEntitiesItemsFieldPatterns;
}

export interface AwsCloudfrontFieldLevelEncryptionProfileArgsEncryptionEntities {
  items?: AwsCloudfrontFieldLevelEncryptionProfileArgsEncryptionEntitiesItems[];
}

export interface AwsCloudfrontFieldLevelEncryptionProfileArgs {
  comment?: string;
  name: string;
  encryption_entities: AwsCloudfrontFieldLevelEncryptionProfileArgsEncryptionEntities;
}

export class aws_cloudfront_field_level_encryption_profile extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCloudfrontFieldLevelEncryptionProfileArgs) {
    const meta = {encryption_entities:{isBlock:true,items:{isBlock:true,field_patterns:{isBlock:true}}}};
    super(terraformConfig, "resource", args, meta, "aws_cloudfront_field_level_encryption_profile", resourceName);
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

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
