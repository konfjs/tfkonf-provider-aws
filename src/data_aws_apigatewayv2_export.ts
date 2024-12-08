import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsApigatewayv2ExportArgs {
  api_id: string;
  export_version?: string;
  include_extensions?: boolean;
  output_type: string;
  specification: string;
  stage_name?: string;
}

export class data_aws_apigatewayv2_export extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsApigatewayv2ExportArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_apigatewayv2_export", resourceName);
  }

  get api_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.api_id`;
  }

  get body(): string {
    return `data.${this.resourceType}.${this.resourceName}.body`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get output_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.output_type`;
  }

  get specification(): string {
    return `data.${this.resourceType}.${this.resourceName}.specification`;
  }
}
