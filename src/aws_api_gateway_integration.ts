import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApiGatewayIntegrationArgsTlsConfig {
  insecure_skip_verification?: boolean;
}

export interface AwsApiGatewayIntegrationArgs {
  cache_key_parameters?: string[];
  connection_id?: string;
  connection_type?: string;
  content_handling?: string;
  credentials?: string;
  http_method: string;
  integration_http_method?: string;
  request_parameters?: { [key: string]: string };
  request_templates?: { [key: string]: string };
  resource_id: string;
  rest_api_id: string;
  timeout_milliseconds?: number;
  type: string;
  uri?: string;
  tls_config?: AwsApiGatewayIntegrationArgsTlsConfig;
}

export class aws_api_gateway_integration extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsApiGatewayIntegrationArgs) {
    const meta = {tls_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_api_gateway_integration", resourceName);
  }

  get cache_namespace(): string {
    return `${this.resourceType}.${this.resourceName}.cache_namespace`;
  }

  get http_method(): string {
    return `${this.resourceType}.${this.resourceName}.http_method`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get passthrough_behavior(): string {
    return `${this.resourceType}.${this.resourceName}.passthrough_behavior`;
  }

  get resource_id(): string {
    return `${this.resourceType}.${this.resourceName}.resource_id`;
  }

  get rest_api_id(): string {
    return `${this.resourceType}.${this.resourceName}.rest_api_id`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
