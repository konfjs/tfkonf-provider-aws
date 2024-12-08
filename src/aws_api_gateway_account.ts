import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApiGatewayAccountArgs {
  reset_on_delete?: boolean;
}

export class aws_api_gateway_account extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsApiGatewayAccountArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_api_gateway_account", resourceName);
  }

  get api_key_version(): string {
    return `${this.resourceType}.${this.resourceName}.api_key_version`;
  }

  get cloudwatch_role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.cloudwatch_role_arn`;
  }

  get features(): string {
    return `${this.resourceType}.${this.resourceName}.features`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get throttle_settings(): string {
    return `${this.resourceType}.${this.resourceName}.throttle_settings`;
  }
}
