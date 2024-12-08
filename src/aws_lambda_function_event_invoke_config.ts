import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLambdaFunctionEventInvokeConfigArgsDestinationConfigOnFailure {
  destination: string;
}

export interface AwsLambdaFunctionEventInvokeConfigArgsDestinationConfigOnSuccess {
  destination: string;
}

export interface AwsLambdaFunctionEventInvokeConfigArgsDestinationConfig {
  on_failure?: AwsLambdaFunctionEventInvokeConfigArgsDestinationConfigOnFailure;
  on_success?: AwsLambdaFunctionEventInvokeConfigArgsDestinationConfigOnSuccess;
}

export interface AwsLambdaFunctionEventInvokeConfigArgs {
  function_name: string;
  maximum_event_age_in_seconds?: number;
  maximum_retry_attempts?: number;
  qualifier?: string;
  destination_config?: AwsLambdaFunctionEventInvokeConfigArgsDestinationConfig;
}

export class aws_lambda_function_event_invoke_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLambdaFunctionEventInvokeConfigArgs) {
    const meta = {destination_config:{isBlock:true,on_failure:{isBlock:true},on_success:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_lambda_function_event_invoke_config", resourceName);
  }

  get function_name(): string {
    return `${this.resourceType}.${this.resourceName}.function_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
