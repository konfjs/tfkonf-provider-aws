import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcEndpointPolicyArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsVpcEndpointPolicyArgs {
  vpc_endpoint_id: string;
  timeouts?: AwsVpcEndpointPolicyArgsTimeouts;
}

export class aws_vpc_endpoint_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsVpcEndpointPolicyArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_vpc_endpoint_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy(): string {
    return `${this.resourceType}.${this.resourceName}.policy`;
  }

  get vpc_endpoint_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_endpoint_id`;
  }
}
