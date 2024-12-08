import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsIotEndpointArgs {
  endpoint_type?: string;
}

export class data_aws_iot_endpoint extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsIotEndpointArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_iot_endpoint", resourceName);
  }

  get endpoint_address(): string {
    return `data.${this.resourceType}.${this.resourceName}.endpoint_address`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
