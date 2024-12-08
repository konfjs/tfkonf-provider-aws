import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApiGatewayVpcLinkArgs {
  description?: string;
  name: string;
  tags?: { [key: string]: string };
  target_arns: string[];
}

export class aws_api_gateway_vpc_link extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsApiGatewayVpcLinkArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_api_gateway_vpc_link", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get target_arns(): string {
    return `${this.resourceType}.${this.resourceName}.target_arns`;
  }
}
