import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApiGatewayModelArgs {
  content_type: string;
  description?: string;
  name: string;
  rest_api_id: string;
  schema?: string;
}

export class aws_api_gateway_model extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsApiGatewayModelArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_api_gateway_model", resourceName);
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

  get rest_api_id(): string {
    return `${this.resourceType}.${this.resourceName}.rest_api_id`;
  }
}
