import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApiGatewayApiKeyArgs {
  customer_id?: string;
  description?: string;
  enabled?: boolean;
  name: string;
  tags?: { [key: string]: string };
}

export class aws_api_gateway_api_key extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsApiGatewayApiKeyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_api_gateway_api_key", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_date(): string {
    return `${this.resourceType}.${this.resourceName}.created_date`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_updated_date(): string {
    return `${this.resourceType}.${this.resourceName}.last_updated_date`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get value(): string {
    return `${this.resourceType}.${this.resourceName}.value`;
  }
}
