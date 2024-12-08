import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsLambdaFunctionUrlArgs {
  function_name: string;
  qualifier?: string;
}

export class data_aws_lambda_function_url extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsLambdaFunctionUrlArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_lambda_function_url", resourceName);
  }

  get authorization_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.authorization_type`;
  }

  get cors(): string {
    return `data.${this.resourceType}.${this.resourceName}.cors`;
  }

  get creation_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.creation_time`;
  }

  get function_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.function_arn`;
  }

  get function_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.function_name`;
  }

  get function_url(): string {
    return `data.${this.resourceType}.${this.resourceName}.function_url`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get invoke_mode(): string {
    return `data.${this.resourceType}.${this.resourceName}.invoke_mode`;
  }

  get last_modified_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_modified_time`;
  }

  get url_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.url_id`;
  }
}
