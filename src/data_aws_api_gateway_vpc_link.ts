import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsApiGatewayVpcLinkArgs {
  name: string;
}

export class data_aws_api_gateway_vpc_link extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsApiGatewayVpcLinkArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_api_gateway_vpc_link", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get status_message(): string {
    return `data.${this.resourceType}.${this.resourceName}.status_message`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get target_arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.target_arns`;
  }
}
