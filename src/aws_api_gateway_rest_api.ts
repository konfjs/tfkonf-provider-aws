import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApiGatewayRestApiArgsEndpointConfiguration {
  types: string[];
}

export interface AwsApiGatewayRestApiArgs {
  body?: string;
  fail_on_warnings?: boolean;
  name: string;
  parameters?: { [key: string]: string };
  put_rest_api_mode?: string;
  tags?: { [key: string]: string };
  endpoint_configuration?: AwsApiGatewayRestApiArgsEndpointConfiguration;
}

export class aws_api_gateway_rest_api extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsApiGatewayRestApiArgs) {
    const meta = {endpoint_configuration:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_api_gateway_rest_api", resourceName);
  }

  get api_key_source(): string {
    return `${this.resourceType}.${this.resourceName}.api_key_source`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get binary_media_types(): string {
    return `${this.resourceType}.${this.resourceName}.binary_media_types`;
  }

  get created_date(): string {
    return `${this.resourceType}.${this.resourceName}.created_date`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get disable_execute_api_endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.disable_execute_api_endpoint`;
  }

  get execution_arn(): string {
    return `${this.resourceType}.${this.resourceName}.execution_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get minimum_compression_size(): string {
    return `${this.resourceType}.${this.resourceName}.minimum_compression_size`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }

  get root_resource_id(): string {
    return `${this.resourceType}.${this.resourceName}.root_resource_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
