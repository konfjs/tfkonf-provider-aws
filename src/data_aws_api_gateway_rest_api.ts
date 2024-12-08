import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsApiGatewayRestApiArgs {
  name: string;
}

export class data_aws_api_gateway_rest_api extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsApiGatewayRestApiArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_api_gateway_rest_api", resourceName);
  }

  get api_key_source(): string {
    return `data.${this.resourceType}.${this.resourceName}.api_key_source`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get binary_media_types(): string {
    return `data.${this.resourceType}.${this.resourceName}.binary_media_types`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get endpoint_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.endpoint_configuration`;
  }

  get execution_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.execution_arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get minimum_compression_size(): string {
    return `data.${this.resourceType}.${this.resourceName}.minimum_compression_size`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy`;
  }

  get root_resource_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.root_resource_id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
