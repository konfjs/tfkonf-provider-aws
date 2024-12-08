import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApigatewayv2ModelArgs {
  api_id: string;
  content_type: string;
  description?: string;
  name: string;
  schema: string;
}

export class aws_apigatewayv2_model extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsApigatewayv2ModelArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_apigatewayv2_model", resourceName);
  }

  get api_id(): string {
    return `${this.resourceType}.${this.resourceName}.api_id`;
  }

  get content_type(): string {
    return `${this.resourceType}.${this.resourceName}.content_type`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get schema(): string {
    return `${this.resourceType}.${this.resourceName}.schema`;
  }
}
