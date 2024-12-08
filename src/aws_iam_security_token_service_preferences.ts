import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamSecurityTokenServicePreferencesArgs {
  global_endpoint_token_version: string;
}

export class aws_iam_security_token_service_preferences extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsIamSecurityTokenServicePreferencesArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iam_security_token_service_preferences", resourceName);
  }

  get global_endpoint_token_version(): string {
    return `${this.resourceType}.${this.resourceName}.global_endpoint_token_version`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
