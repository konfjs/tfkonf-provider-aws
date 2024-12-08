import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsComprehendEntityRecognizerArgsInputDataConfigAnnotations {
  s3_uri: string;
  test_s3_uri?: string;
}

export interface AwsComprehendEntityRecognizerArgsInputDataConfigAugmentedManifests {
  annotation_data_s3_uri?: string;
  attribute_names: string[];
  document_type?: string;
  s3_uri: string;
  source_documents_s3_uri?: string;
  split?: string;
}

export interface AwsComprehendEntityRecognizerArgsInputDataConfigDocuments {
  input_format?: string;
  s3_uri: string;
  test_s3_uri?: string;
}

export interface AwsComprehendEntityRecognizerArgsInputDataConfigEntityList {
  s3_uri: string;
}

export interface AwsComprehendEntityRecognizerArgsInputDataConfigEntityTypes {
  type: string;
}

export interface AwsComprehendEntityRecognizerArgsInputDataConfig {
  data_format?: string;
  annotations?: AwsComprehendEntityRecognizerArgsInputDataConfigAnnotations;
  augmented_manifests?: AwsComprehendEntityRecognizerArgsInputDataConfigAugmentedManifests[];
  documents?: AwsComprehendEntityRecognizerArgsInputDataConfigDocuments;
  entity_list?: AwsComprehendEntityRecognizerArgsInputDataConfigEntityList;
  entity_types: AwsComprehendEntityRecognizerArgsInputDataConfigEntityTypes[];
}

export interface AwsComprehendEntityRecognizerArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsComprehendEntityRecognizerArgsVpcConfig {
  security_group_ids: string[];
  subnets: string[];
}

export interface AwsComprehendEntityRecognizerArgs {
  data_access_role_arn: string;
  language_code: string;
  model_kms_key_id?: string;
  name: string;
  tags?: { [key: string]: string };
  volume_kms_key_id?: string;
  input_data_config: AwsComprehendEntityRecognizerArgsInputDataConfig;
  timeouts?: AwsComprehendEntityRecognizerArgsTimeouts;
  vpc_config?: AwsComprehendEntityRecognizerArgsVpcConfig;
}

export class aws_comprehend_entity_recognizer extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsComprehendEntityRecognizerArgs) {
    const meta = {input_data_config:{isBlock:true,annotations:{isBlock:true},augmented_manifests:{isBlock:true},documents:{isBlock:true},entity_list:{isBlock:true},entity_types:{isBlock:true}},timeouts:{isBlock:true},vpc_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_comprehend_entity_recognizer", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get data_access_role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.data_access_role_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get language_code(): string {
    return `${this.resourceType}.${this.resourceName}.language_code`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get version_name(): string {
    return `${this.resourceType}.${this.resourceName}.version_name`;
  }

  get version_name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.version_name_prefix`;
  }
}
