import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsBedrockagentKnowledgeBaseArgsKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration {
  embedding_model_arn: string;
}

export interface AwsBedrockagentKnowledgeBaseArgsKnowledgeBaseConfiguration {
  type: string;
  vector_knowledge_base_configuration?: AwsBedrockagentKnowledgeBaseArgsKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration[];
}

export interface AwsBedrockagentKnowledgeBaseArgsStorageConfigurationOpensearchServerlessConfigurationFieldMapping {
  metadata_field?: string;
  text_field?: string;
  vector_field?: string;
}

export interface AwsBedrockagentKnowledgeBaseArgsStorageConfigurationOpensearchServerlessConfiguration {
  collection_arn: string;
  vector_index_name: string;
  field_mapping?: AwsBedrockagentKnowledgeBaseArgsStorageConfigurationOpensearchServerlessConfigurationFieldMapping[];
}

export interface AwsBedrockagentKnowledgeBaseArgsStorageConfigurationPineconeConfigurationFieldMapping {
  metadata_field?: string;
  text_field?: string;
}

export interface AwsBedrockagentKnowledgeBaseArgsStorageConfigurationPineconeConfiguration {
  connection_string: string;
  credentials_secret_arn: string;
  namespace?: string;
  field_mapping?: AwsBedrockagentKnowledgeBaseArgsStorageConfigurationPineconeConfigurationFieldMapping[];
}

export interface AwsBedrockagentKnowledgeBaseArgsStorageConfigurationRdsConfigurationFieldMapping {
  metadata_field: string;
  primary_key_field: string;
  text_field: string;
  vector_field: string;
}

export interface AwsBedrockagentKnowledgeBaseArgsStorageConfigurationRdsConfiguration {
  credentials_secret_arn: string;
  database_name: string;
  resource_arn: string;
  table_name: string;
  field_mapping?: AwsBedrockagentKnowledgeBaseArgsStorageConfigurationRdsConfigurationFieldMapping[];
}

export interface AwsBedrockagentKnowledgeBaseArgsStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping {
  metadata_field?: string;
  text_field?: string;
  vector_field?: string;
}

export interface AwsBedrockagentKnowledgeBaseArgsStorageConfigurationRedisEnterpriseCloudConfiguration {
  credentials_secret_arn: string;
  endpoint: string;
  vector_index_name: string;
  field_mapping?: AwsBedrockagentKnowledgeBaseArgsStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping[];
}

export interface AwsBedrockagentKnowledgeBaseArgsStorageConfiguration {
  type: string;
  opensearch_serverless_configuration?: AwsBedrockagentKnowledgeBaseArgsStorageConfigurationOpensearchServerlessConfiguration[];
  pinecone_configuration?: AwsBedrockagentKnowledgeBaseArgsStorageConfigurationPineconeConfiguration[];
  rds_configuration?: AwsBedrockagentKnowledgeBaseArgsStorageConfigurationRdsConfiguration[];
  redis_enterprise_cloud_configuration?: AwsBedrockagentKnowledgeBaseArgsStorageConfigurationRedisEnterpriseCloudConfiguration[];
}

export interface AwsBedrockagentKnowledgeBaseArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsBedrockagentKnowledgeBaseArgs {
  description?: string;
  name: string;
  role_arn: string;
  tags?: { [key: string]: string };
  knowledge_base_configuration?: AwsBedrockagentKnowledgeBaseArgsKnowledgeBaseConfiguration[];
  storage_configuration?: AwsBedrockagentKnowledgeBaseArgsStorageConfiguration[];
  timeouts?: AwsBedrockagentKnowledgeBaseArgsTimeouts;
}

export class aws_bedrockagent_knowledge_base extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsBedrockagentKnowledgeBaseArgs) {
    const meta = {knowledge_base_configuration:{isBlock:true,vector_knowledge_base_configuration:{isBlock:true}},storage_configuration:{isBlock:true,opensearch_serverless_configuration:{isBlock:true,field_mapping:{isBlock:true}},pinecone_configuration:{isBlock:true,field_mapping:{isBlock:true}},rds_configuration:{isBlock:true,field_mapping:{isBlock:true}},redis_enterprise_cloud_configuration:{isBlock:true,field_mapping:{isBlock:true}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_bedrockagent_knowledge_base", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_at(): string {
    return `${this.resourceType}.${this.resourceName}.created_at`;
  }

  get failure_reasons(): string {
    return `${this.resourceType}.${this.resourceName}.failure_reasons`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get updated_at(): string {
    return `${this.resourceType}.${this.resourceName}.updated_at`;
  }
}
