import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLambdaPermissionArgs {
  action: string;
  event_source_token?: string;
  function_name: string;
  function_url_auth_type?: string;
  principal: string;
  principal_org_id?: string;
  qualifier?: string;
  source_account?: string;
  source_arn?: string;
}

export class aws_lambda_permission extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsLambdaPermissionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_lambda_permission", resourceName);
  }

  get action(): string {
    return `${this.resourceType}.${this.resourceName}.action`;
  }

  get function_name(): string {
    return `${this.resourceType}.${this.resourceName}.function_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get principal(): string {
    return `${this.resourceType}.${this.resourceName}.principal`;
  }

  get statement_id(): string {
    return `${this.resourceType}.${this.resourceName}.statement_id`;
  }

  get statement_id_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.statement_id_prefix`;
  }
}
