import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApigatewayv2RouteResponseArgs {
  api_id: string;
  model_selection_expression?: string;
  response_models?: { [key: string]: string };
  route_id: string;
  route_response_key: string;
}

export class aws_apigatewayv2_route_response extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsApigatewayv2RouteResponseArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_apigatewayv2_route_response", resourceName);
  }

  get api_id(): string {
    return `${this.resourceType}.${this.resourceName}.api_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get route_id(): string {
    return `${this.resourceType}.${this.resourceName}.route_id`;
  }

  get route_response_key(): string {
    return `${this.resourceType}.${this.resourceName}.route_response_key`;
  }
}
