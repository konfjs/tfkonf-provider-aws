import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApigatewayv2IntegrationArgsResponseParameters {
  mappings: { [key: string]: string };
  status_code: string;
}

export interface AwsApigatewayv2IntegrationArgsTlsConfig {
  server_name_to_verify?: string;
}

export interface AwsApigatewayv2IntegrationArgs {
  api_id: string;
  connection_id?: string;
  connection_type?: string;
  content_handling_strategy?: string;
  credentials_arn?: string;
  description?: string;
  integration_method?: string;
  integration_subtype?: string;
  integration_type: string;
  integration_uri?: string;
  passthrough_behavior?: string;
  payload_format_version?: string;
  request_parameters?: { [key: string]: string };
  request_templates?: { [key: string]: string };
  template_selection_expression?: string;
  response_parameters?: AwsApigatewayv2IntegrationArgsResponseParameters[];
  tls_config?: AwsApigatewayv2IntegrationArgsTlsConfig;
}

export class aws_apigatewayv2_integration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsApigatewayv2IntegrationArgs) {
    const meta = {response_parameters:{isBlock:true},tls_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_apigatewayv2_integration", resourceName);
  }

  get api_id(): string {
    return `${this.resourceType}.${this.resourceName}.api_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get integration_response_selection_expression(): string {
    return `${this.resourceType}.${this.resourceName}.integration_response_selection_expression`;
  }

  get integration_type(): string {
    return `${this.resourceType}.${this.resourceName}.integration_type`;
  }

  get timeout_milliseconds(): string {
    return `${this.resourceType}.${this.resourceName}.timeout_milliseconds`;
  }
}
