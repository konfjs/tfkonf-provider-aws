import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsApiGatewayApiKeyArgs {
  id: string;
}

export class data_aws_api_gateway_api_key extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsApiGatewayApiKeyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_api_gateway_api_key", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_date`;
  }

  get customer_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.customer_id`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get enabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.enabled`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get last_updated_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_updated_date`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get value(): string {
    return `data.${this.resourceType}.${this.resourceName}.value`;
  }
}
