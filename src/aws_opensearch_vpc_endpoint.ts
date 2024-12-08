import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOpensearchVpcEndpointArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsOpensearchVpcEndpointArgsVpcOptions {
  subnet_ids: string[];
}

export interface AwsOpensearchVpcEndpointArgs {
  domain_arn: string;
  timeouts?: AwsOpensearchVpcEndpointArgsTimeouts;
  vpc_options: AwsOpensearchVpcEndpointArgsVpcOptions;
}

export class aws_opensearch_vpc_endpoint extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsOpensearchVpcEndpointArgs) {
    const meta = {timeouts:{isBlock:true},vpc_options:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_opensearch_vpc_endpoint", resourceName);
  }

  get domain_arn(): string {
    return `${this.resourceType}.${this.resourceName}.domain_arn`;
  }

  get endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
