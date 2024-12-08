import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLambdaAliasArgsRoutingConfig {
  additional_version_weights?: { [key: string]: number };
}

export interface AwsLambdaAliasArgs {
  description?: string;
  function_name: string;
  function_version: string;
  name: string;
  routing_config?: AwsLambdaAliasArgsRoutingConfig;
}

export class aws_lambda_alias extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsLambdaAliasArgs) {
    const meta = {routing_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_lambda_alias", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get function_name(): string {
    return `${this.resourceType}.${this.resourceName}.function_name`;
  }

  get function_version(): string {
    return `${this.resourceType}.${this.resourceName}.function_version`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get invoke_arn(): string {
    return `${this.resourceType}.${this.resourceName}.invoke_arn`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
