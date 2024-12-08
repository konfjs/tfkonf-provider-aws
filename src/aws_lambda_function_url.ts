import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLambdaFunctionUrlArgsCors {
  allow_credentials?: boolean;
  allow_headers?: string[];
  allow_methods?: string[];
  allow_origins?: string[];
  expose_headers?: string[];
  max_age?: number;
}

export interface AwsLambdaFunctionUrlArgsTimeouts {
  create?: string;
}

export interface AwsLambdaFunctionUrlArgs {
  authorization_type: string;
  function_name: string;
  invoke_mode?: string;
  qualifier?: string;
  cors?: AwsLambdaFunctionUrlArgsCors;
  timeouts?: AwsLambdaFunctionUrlArgsTimeouts;
}

export class aws_lambda_function_url extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLambdaFunctionUrlArgs) {
    const meta = {cors:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_lambda_function_url", resourceName);
  }

  get authorization_type(): string {
    return `${this.resourceType}.${this.resourceName}.authorization_type`;
  }

  get function_arn(): string {
    return `${this.resourceType}.${this.resourceName}.function_arn`;
  }

  get function_name(): string {
    return `${this.resourceType}.${this.resourceName}.function_name`;
  }

  get function_url(): string {
    return `${this.resourceType}.${this.resourceName}.function_url`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get url_id(): string {
    return `${this.resourceType}.${this.resourceName}.url_id`;
  }
}
