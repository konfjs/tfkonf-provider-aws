import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsLambdaFunctionArgs {
  function_name: string;
  qualifier?: string;
}

export class data_aws_lambda_function extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsLambdaFunctionArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_lambda_function", resourceName);
  }

  get architectures(): string {
    return `data.${this.resourceType}.${this.resourceName}.architectures`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get code_sha256(): string {
    return `data.${this.resourceType}.${this.resourceName}.code_sha256`;
  }

  get code_signing_config_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.code_signing_config_arn`;
  }

  get dead_letter_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.dead_letter_config`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get environment(): string {
    return `data.${this.resourceType}.${this.resourceName}.environment`;
  }

  get ephemeral_storage(): string {
    return `data.${this.resourceType}.${this.resourceName}.ephemeral_storage`;
  }

  get file_system_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.file_system_config`;
  }

  get function_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.function_name`;
  }

  get handler(): string {
    return `data.${this.resourceType}.${this.resourceName}.handler`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get image_uri(): string {
    return `data.${this.resourceType}.${this.resourceName}.image_uri`;
  }

  get invoke_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.invoke_arn`;
  }

  get kms_key_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_arn`;
  }

  get last_modified(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_modified`;
  }

  get layers(): string {
    return `data.${this.resourceType}.${this.resourceName}.layers`;
  }

  get logging_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.logging_config`;
  }

  get memory_size(): string {
    return `data.${this.resourceType}.${this.resourceName}.memory_size`;
  }

  get qualified_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.qualified_arn`;
  }

  get qualified_invoke_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.qualified_invoke_arn`;
  }

  get reserved_concurrent_executions(): string {
    return `data.${this.resourceType}.${this.resourceName}.reserved_concurrent_executions`;
  }

  get role(): string {
    return `data.${this.resourceType}.${this.resourceName}.role`;
  }

  get runtime(): string {
    return `data.${this.resourceType}.${this.resourceName}.runtime`;
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

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get timeout(): string {
    return `data.${this.resourceType}.${this.resourceName}.timeout`;
  }

  get tracing_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.tracing_config`;
  }

  get version(): string {
    return `data.${this.resourceType}.${this.resourceName}.version`;
  }

  get vpc_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_config`;
  }
}
