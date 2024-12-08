import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsApigatewayv2VpcLinkArgs {
  vpc_link_id: string;
}

export class data_aws_apigatewayv2_vpc_link extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsApigatewayv2VpcLinkArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_apigatewayv2_vpc_link", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get security_group_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_group_ids`;
  }

  get subnet_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnet_ids`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get vpc_link_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_link_id`;
  }
}
