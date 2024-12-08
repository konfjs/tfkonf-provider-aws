import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLambdaProvisionedConcurrencyConfigArgsTimeouts {
  create?: string;
  update?: string;
}

export interface AwsLambdaProvisionedConcurrencyConfigArgs {
  function_name: string;
  provisioned_concurrent_executions: number;
  qualifier: string;
  skip_destroy?: boolean;
  timeouts?: AwsLambdaProvisionedConcurrencyConfigArgsTimeouts;
}

export class aws_lambda_provisioned_concurrency_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLambdaProvisionedConcurrencyConfigArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_lambda_provisioned_concurrency_config", resourceName);
  }

  get function_name(): string {
    return `${this.resourceType}.${this.resourceName}.function_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get provisioned_concurrent_executions(): string {
    return `${this.resourceType}.${this.resourceName}.provisioned_concurrent_executions`;
  }

  get qualifier(): string {
    return `${this.resourceType}.${this.resourceName}.qualifier`;
  }
}
