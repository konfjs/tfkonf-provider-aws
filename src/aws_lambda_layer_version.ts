import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLambdaLayerVersionArgs {
  compatible_architectures?: string[];
  compatible_runtimes?: string[];
  description?: string;
  filename?: string;
  layer_name: string;
  license_info?: string;
  s3_bucket?: string;
  s3_key?: string;
  s3_object_version?: string;
  skip_destroy?: boolean;
}

export class aws_lambda_layer_version extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLambdaLayerVersionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_lambda_layer_version", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get code_sha256(): string {
    return `${this.resourceType}.${this.resourceName}.code_sha256`;
  }

  get created_date(): string {
    return `${this.resourceType}.${this.resourceName}.created_date`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get layer_arn(): string {
    return `${this.resourceType}.${this.resourceName}.layer_arn`;
  }

  get layer_name(): string {
    return `${this.resourceType}.${this.resourceName}.layer_name`;
  }

  get signing_job_arn(): string {
    return `${this.resourceType}.${this.resourceName}.signing_job_arn`;
  }

  get signing_profile_version_arn(): string {
    return `${this.resourceType}.${this.resourceName}.signing_profile_version_arn`;
  }

  get source_code_hash(): string {
    return `${this.resourceType}.${this.resourceName}.source_code_hash`;
  }

  get source_code_size(): string {
    return `${this.resourceType}.${this.resourceName}.source_code_size`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
