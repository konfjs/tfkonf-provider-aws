import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOpensearchserverlessVpcEndpointArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsOpensearchserverlessVpcEndpointArgs {
  name: string;
  subnet_ids: string[];
  vpc_id: string;
  timeouts?: AwsOpensearchserverlessVpcEndpointArgsTimeouts;
}

export class aws_opensearchserverless_vpc_endpoint extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsOpensearchserverlessVpcEndpointArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_opensearchserverless_vpc_endpoint", resourceName);
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

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
