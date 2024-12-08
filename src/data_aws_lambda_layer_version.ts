import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsLambdaLayerVersionArgs {
  compatible_architecture?: string;
  compatible_runtime?: string;
  layer_name: string;
}

export class data_aws_lambda_layer_version extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsLambdaLayerVersionArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_lambda_layer_version", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get code_sha256(): string {
    return `data.${this.resourceType}.${this.resourceName}.code_sha256`;
  }

  get compatible_architectures(): string {
    return `data.${this.resourceType}.${this.resourceName}.compatible_architectures`;
  }

  get compatible_runtimes(): string {
    return `data.${this.resourceType}.${this.resourceName}.compatible_runtimes`;
  }

  get created_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_date`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get layer_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.layer_arn`;
  }

  get layer_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.layer_name`;
  }

  get license_info(): string {
    return `data.${this.resourceType}.${this.resourceName}.license_info`;
  }

  get signing_job_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.signing_job_arn`;
  }

  get signing_profile_version_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.signing_profile_version_arn`;
  }

  get source_code_hash(): string {
    return `data.${this.resourceType}.${this.resourceName}.source_code_hash`;
  }

  get source_code_size(): string {
    return `data.${this.resourceType}.${this.resourceName}.source_code_size`;
  }

  get version(): string {
    return `data.${this.resourceType}.${this.resourceName}.version`;
  }
}
