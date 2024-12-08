import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsApiGatewayExportArgs {
  accepts?: string;
  export_type: string;
  parameters?: { [key: string]: string };
  rest_api_id: string;
  stage_name: string;
}

export class data_aws_api_gateway_export extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsApiGatewayExportArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_api_gateway_export", resourceName);
  }

  get body(): string {
    return `data.${this.resourceType}.${this.resourceName}.body`;
  }

  get content_disposition(): string {
    return `data.${this.resourceType}.${this.resourceName}.content_disposition`;
  }

  get content_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.content_type`;
  }

  get export_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.export_type`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get rest_api_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.rest_api_id`;
  }

  get stage_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.stage_name`;
  }
}
