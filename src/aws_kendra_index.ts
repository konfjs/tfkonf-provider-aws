import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsKendraIndexArgsCapacityUnits {
}

export interface AwsKendraIndexArgsDocumentMetadataConfigurationUpdatesRelevance {
}

export interface AwsKendraIndexArgsDocumentMetadataConfigurationUpdatesSearch {
}

export interface AwsKendraIndexArgsDocumentMetadataConfigurationUpdates {
  name: string;
  type: string;
  relevance?: AwsKendraIndexArgsDocumentMetadataConfigurationUpdatesRelevance;
  search?: AwsKendraIndexArgsDocumentMetadataConfigurationUpdatesSearch;
}

export interface AwsKendraIndexArgsServerSideEncryptionConfiguration {
  kms_key_id?: string;
}

export interface AwsKendraIndexArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsKendraIndexArgsUserGroupResolutionConfiguration {
  user_group_resolution_mode: string;
}

export interface AwsKendraIndexArgsUserTokenConfigurationsJsonTokenTypeConfiguration {
  group_attribute_field: string;
  user_name_attribute_field: string;
}

export interface AwsKendraIndexArgsUserTokenConfigurationsJwtTokenTypeConfiguration {
  claim_regex?: string;
  group_attribute_field?: string;
  issuer?: string;
  key_location: string;
  secrets_manager_arn?: string;
  url?: string;
  user_name_attribute_field?: string;
}

export interface AwsKendraIndexArgsUserTokenConfigurations {
  json_token_type_configuration?: AwsKendraIndexArgsUserTokenConfigurationsJsonTokenTypeConfiguration;
  jwt_token_type_configuration?: AwsKendraIndexArgsUserTokenConfigurationsJwtTokenTypeConfiguration;
}

export interface AwsKendraIndexArgs {
  description?: string;
  edition?: string;
  name: string;
  role_arn: string;
  tags?: { [key: string]: string };
  user_context_policy?: string;
  capacity_units?: AwsKendraIndexArgsCapacityUnits;
  document_metadata_configuration_updates?: AwsKendraIndexArgsDocumentMetadataConfigurationUpdates[];
  server_side_encryption_configuration?: AwsKendraIndexArgsServerSideEncryptionConfiguration;
  timeouts?: AwsKendraIndexArgsTimeouts;
  user_group_resolution_configuration?: AwsKendraIndexArgsUserGroupResolutionConfiguration;
  user_token_configurations?: AwsKendraIndexArgsUserTokenConfigurations;
}

export class aws_kendra_index extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsKendraIndexArgs) {
    const meta = {capacity_units:{isBlock:true},document_metadata_configuration_updates:{isBlock:true,relevance:{isBlock:true},search:{isBlock:true}},server_side_encryption_configuration:{isBlock:true},timeouts:{isBlock:true},user_group_resolution_configuration:{isBlock:true},user_token_configurations:{isBlock:true,json_token_type_configuration:{isBlock:true},jwt_token_type_configuration:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_kendra_index", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_at(): string {
    return `${this.resourceType}.${this.resourceName}.created_at`;
  }

  get error_message(): string {
    return `${this.resourceType}.${this.resourceName}.error_message`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get index_statistics(): string {
    return `${this.resourceType}.${this.resourceName}.index_statistics`;
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

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get updated_at(): string {
    return `${this.resourceType}.${this.resourceName}.updated_at`;
  }
}
