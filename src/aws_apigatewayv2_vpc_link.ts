import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApigatewayv2VpcLinkArgs {
  name: string;
  security_group_ids: string[];
  subnet_ids: string[];
  tags?: { [key: string]: string };
}

export class aws_apigatewayv2_vpc_link extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsApigatewayv2VpcLinkArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_apigatewayv2_vpc_link", resourceName);
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

  get security_group_ids(): string {
    return `${this.resourceType}.${this.resourceName}.security_group_ids`;
  }

  get subnet_ids(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_ids`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
