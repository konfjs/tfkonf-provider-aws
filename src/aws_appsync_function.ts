import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppsyncFunctionArgsRuntime {
  name: string;
  runtime_version: string;
}

export interface AwsAppsyncFunctionArgsSyncConfigLambdaConflictHandlerConfig {
  lambda_conflict_handler_arn?: string;
}

export interface AwsAppsyncFunctionArgsSyncConfig {
  conflict_detection?: string;
  conflict_handler?: string;
  lambda_conflict_handler_config?: AwsAppsyncFunctionArgsSyncConfigLambdaConflictHandlerConfig;
}

export interface AwsAppsyncFunctionArgs {
  api_id: string;
  code?: string;
  data_source: string;
  description?: string;
  max_batch_size?: number;
  name: string;
  request_mapping_template?: string;
  response_mapping_template?: string;
  runtime?: AwsAppsyncFunctionArgsRuntime;
  sync_config?: AwsAppsyncFunctionArgsSyncConfig;
}

export class aws_appsync_function extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAppsyncFunctionArgs) {
    const meta = {runtime:{isBlock:true},sync_config:{isBlock:true,lambda_conflict_handler_config:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_appsync_function", resourceName);
  }

  get api_id(): string {
    return `${this.resourceType}.${this.resourceName}.api_id`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get data_source(): string {
    return `${this.resourceType}.${this.resourceName}.data_source`;
  }

  get function_id(): string {
    return `${this.resourceType}.${this.resourceName}.function_id`;
  }

  get function_version(): string {
    return `${this.resourceType}.${this.resourceName}.function_version`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
