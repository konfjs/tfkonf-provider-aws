import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApiGatewayDocumentationVersionArgs {
  description?: string;
  rest_api_id: string;
  version: string;
}

export class aws_api_gateway_documentation_version extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsApiGatewayDocumentationVersionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_api_gateway_documentation_version", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get rest_api_id(): string {
    return `${this.resourceType}.${this.resourceName}.rest_api_id`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
