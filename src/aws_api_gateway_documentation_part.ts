import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApiGatewayDocumentationPartArgsLocation {
  method?: string;
  name?: string;
  path?: string;
  status_code?: string;
  type: string;
}

export interface AwsApiGatewayDocumentationPartArgs {
  properties: string;
  rest_api_id: string;
  location: AwsApiGatewayDocumentationPartArgsLocation;
}

export class aws_api_gateway_documentation_part extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsApiGatewayDocumentationPartArgs) {
    const meta = {location:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_api_gateway_documentation_part", resourceName);
  }

  get documentation_part_id(): string {
    return `${this.resourceType}.${this.resourceName}.documentation_part_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get properties(): string {
    return `${this.resourceType}.${this.resourceName}.properties`;
  }

  get rest_api_id(): string {
    return `${this.resourceType}.${this.resourceName}.rest_api_id`;
  }
}
