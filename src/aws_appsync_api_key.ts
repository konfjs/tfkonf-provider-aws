import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppsyncApiKeyArgs {
  api_id: string;
  description?: string;
  expires?: string;
}

export class aws_appsync_api_key extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAppsyncApiKeyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_appsync_api_key", resourceName);
  }

  get api_id(): string {
    return `${this.resourceType}.${this.resourceName}.api_id`;
  }

  get api_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.api_key_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key(): string {
    return `${this.resourceType}.${this.resourceName}.key`;
  }
}
