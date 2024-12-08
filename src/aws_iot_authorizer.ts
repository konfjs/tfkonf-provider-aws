import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIotAuthorizerArgs {
  authorizer_function_arn: string;
  enable_caching_for_http?: boolean;
  name: string;
  signing_disabled?: boolean;
  status?: string;
  tags?: { [key: string]: string };
  token_key_name?: string;
  token_signing_public_keys?: { [key: string]: string };
}

export class aws_iot_authorizer extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsIotAuthorizerArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iot_authorizer", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get authorizer_function_arn(): string {
    return `${this.resourceType}.${this.resourceName}.authorizer_function_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
