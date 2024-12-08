import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLambdaFunctionArgsDeadLetterConfig {
  target_arn: string;
}

export interface AwsLambdaFunctionArgsEnvironment {
  variables?: { [key: string]: string };
}

export interface AwsLambdaFunctionArgsEphemeralStorage {
}

export interface AwsLambdaFunctionArgsFileSystemConfig {
  arn: string;
  local_mount_path: string;
}

export interface AwsLambdaFunctionArgsImageConfig {
  command?: string[];
  entry_point?: string[];
  working_directory?: string;
}

export interface AwsLambdaFunctionArgsLoggingConfig {
  application_log_level?: string;
  log_format: string;
  system_log_level?: string;
}

export interface AwsLambdaFunctionArgsSnapStart {
  apply_on: string;
}

export interface AwsLambdaFunctionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsLambdaFunctionArgsTracingConfig {
  mode: string;
}

export interface AwsLambdaFunctionArgsVpcConfig {
  ipv6_allowed_for_dual_stack?: boolean;
  security_group_ids: string[];
  subnet_ids: string[];
}

export interface AwsLambdaFunctionArgs {
  code_signing_config_arn?: string;
  description?: string;
  filename?: string;
  function_name: string;
  handler?: string;
  image_uri?: string;
  kms_key_arn?: string;
  layers?: string[];
  memory_size?: number;
  package_type?: string;
  publish?: boolean;
  replace_security_groups_on_destroy?: boolean;
  replacement_security_group_ids?: string[];
  reserved_concurrent_executions?: number;
  role: string;
  runtime?: string;
  s3_bucket?: string;
  s3_key?: string;
  s3_object_version?: string;
  skip_destroy?: boolean;
  tags?: { [key: string]: string };
  timeout?: number;
  dead_letter_config?: AwsLambdaFunctionArgsDeadLetterConfig;
  environment?: AwsLambdaFunctionArgsEnvironment;
  ephemeral_storage?: AwsLambdaFunctionArgsEphemeralStorage;
  file_system_config?: AwsLambdaFunctionArgsFileSystemConfig;
  image_config?: AwsLambdaFunctionArgsImageConfig;
  logging_config?: AwsLambdaFunctionArgsLoggingConfig;
  snap_start?: AwsLambdaFunctionArgsSnapStart;
  timeouts?: AwsLambdaFunctionArgsTimeouts;
  tracing_config?: AwsLambdaFunctionArgsTracingConfig;
  vpc_config?: AwsLambdaFunctionArgsVpcConfig;
}

export class aws_lambda_function extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsLambdaFunctionArgs) {
    const meta = {dead_letter_config:{isBlock:true},environment:{isBlock:true},ephemeral_storage:{isBlock:true},file_system_config:{isBlock:true},image_config:{isBlock:true},logging_config:{isBlock:true},snap_start:{isBlock:true},timeouts:{isBlock:true},tracing_config:{isBlock:true},vpc_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_lambda_function", resourceName);
  }

  get architectures(): string {
    return `${this.resourceType}.${this.resourceName}.architectures`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get code_sha256(): string {
    return `${this.resourceType}.${this.resourceName}.code_sha256`;
  }

  get function_name(): string {
    return `${this.resourceType}.${this.resourceName}.function_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get invoke_arn(): string {
    return `${this.resourceType}.${this.resourceName}.invoke_arn`;
  }

  get last_modified(): string {
    return `${this.resourceType}.${this.resourceName}.last_modified`;
  }

  get qualified_arn(): string {
    return `${this.resourceType}.${this.resourceName}.qualified_arn`;
  }

  get qualified_invoke_arn(): string {
    return `${this.resourceType}.${this.resourceName}.qualified_invoke_arn`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
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

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
