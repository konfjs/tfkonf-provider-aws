import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppsyncResolverArgsCachingConfig {
  caching_keys?: string[];
  ttl?: number;
}

export interface AwsAppsyncResolverArgsPipelineConfig {
  functions?: string[];
}

export interface AwsAppsyncResolverArgsRuntime {
  name: string;
  runtime_version: string;
}

export interface AwsAppsyncResolverArgsSyncConfigLambdaConflictHandlerConfig {
  lambda_conflict_handler_arn?: string;
}

export interface AwsAppsyncResolverArgsSyncConfig {
  conflict_detection?: string;
  conflict_handler?: string;
  lambda_conflict_handler_config?: AwsAppsyncResolverArgsSyncConfigLambdaConflictHandlerConfig;
}

export interface AwsAppsyncResolverArgs {
  api_id: string;
  code?: string;
  data_source?: string;
  field: string;
  kind?: string;
  max_batch_size?: number;
  request_template?: string;
  response_template?: string;
  type: string;
  caching_config?: AwsAppsyncResolverArgsCachingConfig;
  pipeline_config?: AwsAppsyncResolverArgsPipelineConfig;
  runtime?: AwsAppsyncResolverArgsRuntime;
  sync_config?: AwsAppsyncResolverArgsSyncConfig;
}

export class aws_appsync_resolver extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAppsyncResolverArgs) {
    const meta = {caching_config:{isBlock:true},pipeline_config:{isBlock:true},runtime:{isBlock:true},sync_config:{isBlock:true,lambda_conflict_handler_config:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_appsync_resolver", resourceName);
  }

  get api_id(): string {
    return `${this.resourceType}.${this.resourceName}.api_id`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get field(): string {
    return `${this.resourceType}.${this.resourceName}.field`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
