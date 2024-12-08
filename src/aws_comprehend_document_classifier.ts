import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsComprehendDocumentClassifierArgsInputDataConfigAugmentedManifests {
  annotation_data_s3_uri?: string;
  attribute_names: string[];
  document_type?: string;
  s3_uri: string;
  source_documents_s3_uri?: string;
  split?: string;
}

export interface AwsComprehendDocumentClassifierArgsInputDataConfig {
  data_format?: string;
  s3_uri?: string;
  test_s3_uri?: string;
  augmented_manifests?: AwsComprehendDocumentClassifierArgsInputDataConfigAugmentedManifests[];
}

export interface AwsComprehendDocumentClassifierArgsOutputDataConfig {
  kms_key_id?: string;
  s3_uri: string;
}

export interface AwsComprehendDocumentClassifierArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsComprehendDocumentClassifierArgsVpcConfig {
  security_group_ids: string[];
  subnets: string[];
}

export interface AwsComprehendDocumentClassifierArgs {
  data_access_role_arn: string;
  language_code: string;
  mode?: string;
  model_kms_key_id?: string;
  name: string;
  tags?: { [key: string]: string };
  volume_kms_key_id?: string;
  input_data_config: AwsComprehendDocumentClassifierArgsInputDataConfig;
  output_data_config?: AwsComprehendDocumentClassifierArgsOutputDataConfig;
  timeouts?: AwsComprehendDocumentClassifierArgsTimeouts;
  vpc_config?: AwsComprehendDocumentClassifierArgsVpcConfig;
}

export class aws_comprehend_document_classifier extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsComprehendDocumentClassifierArgs) {
    const meta = {input_data_config:{isBlock:true,augmented_manifests:{isBlock:true}},output_data_config:{isBlock:true},timeouts:{isBlock:true},vpc_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_comprehend_document_classifier", resourceName);
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
