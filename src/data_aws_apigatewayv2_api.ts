import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsApigatewayv2ApiArgs {
  api_id: string;
}

export class data_aws_apigatewayv2_api extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsApigatewayv2ApiArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_apigatewayv2_api", resourceName);
  }

  get api_endpoint(): string {
    return `data.${this.resourceType}.${this.resourceName}.api_endpoint`;
  }

  get api_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.api_id`;
  }

  get api_key_selection_expression(): string {
    return `data.${this.resourceType}.${this.resourceName}.api_key_selection_expression`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get cors_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.cors_configuration`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get disable_execute_api_endpoint(): string {
    return `data.${this.resourceType}.${this.resourceName}.disable_execute_api_endpoint`;
  }

  get execution_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.execution_arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get protocol_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.protocol_type`;
  }

  get route_selection_expression(): string {
    return `data.${this.resourceType}.${this.resourceName}.route_selection_expression`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get version(): string {
    return `data.${this.resourceType}.${this.resourceName}.version`;
  }
}
