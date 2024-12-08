import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsApiGatewayAuthorizerArgs {
  authorizer_id: string;
  rest_api_id: string;
}

export class data_aws_api_gateway_authorizer extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsApiGatewayAuthorizerArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_api_gateway_authorizer", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get authorizer_credentials(): string {
    return `data.${this.resourceType}.${this.resourceName}.authorizer_credentials`;
  }

  get authorizer_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.authorizer_id`;
  }

  get authorizer_result_ttl_in_seconds(): string {
    return `data.${this.resourceType}.${this.resourceName}.authorizer_result_ttl_in_seconds`;
  }

  get authorizer_uri(): string {
    return `data.${this.resourceType}.${this.resourceName}.authorizer_uri`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get identity_source(): string {
    return `data.${this.resourceType}.${this.resourceName}.identity_source`;
  }

  get identity_validation_expression(): string {
    return `data.${this.resourceType}.${this.resourceName}.identity_validation_expression`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get provider_arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.provider_arns`;
  }

  get rest_api_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.rest_api_id`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }
}
