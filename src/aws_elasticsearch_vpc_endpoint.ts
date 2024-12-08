import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsElasticsearchVpcEndpointArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsElasticsearchVpcEndpointArgsVpcOptions {
  subnet_ids: string[];
}

export interface AwsElasticsearchVpcEndpointArgs {
  domain_arn: string;
  timeouts?: AwsElasticsearchVpcEndpointArgsTimeouts;
  vpc_options: AwsElasticsearchVpcEndpointArgsVpcOptions;
}

export class aws_elasticsearch_vpc_endpoint extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsElasticsearchVpcEndpointArgs) {
    const meta = {timeouts:{isBlock:true},vpc_options:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_elasticsearch_vpc_endpoint", resourceName);
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
