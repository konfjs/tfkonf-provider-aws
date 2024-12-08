import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApigatewayv2ApiMappingArgs {
  api_id: string;
  api_mapping_key?: string;
  domain_name: string;
  stage: string;
}

export class aws_apigatewayv2_api_mapping extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsApigatewayv2ApiMappingArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_apigatewayv2_api_mapping", resourceName);
  }

  get api_id(): string {
    return `${this.resourceType}.${this.resourceName}.api_id`;
  }

  get domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get stage(): string {
    return `${this.resourceType}.${this.resourceName}.stage`;
  }
}
