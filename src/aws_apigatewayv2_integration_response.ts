import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApigatewayv2IntegrationResponseArgs {
  api_id: string;
  content_handling_strategy?: string;
  integration_id: string;
  integration_response_key: string;
  response_templates?: { [key: string]: string };
  template_selection_expression?: string;
}

export class aws_apigatewayv2_integration_response extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsApigatewayv2IntegrationResponseArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_apigatewayv2_integration_response", resourceName);
  }

  get api_id(): string {
    return `${this.resourceType}.${this.resourceName}.api_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get integration_id(): string {
    return `${this.resourceType}.${this.resourceName}.integration_id`;
  }

  get integration_response_key(): string {
    return `${this.resourceType}.${this.resourceName}.integration_response_key`;
  }
}
