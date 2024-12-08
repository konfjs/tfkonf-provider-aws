import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOpensearchAuthorizeVpcEndpointAccessArgs {
  account: string;
  domain_name: string;
}

export class aws_opensearch_authorize_vpc_endpoint_access extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsOpensearchAuthorizeVpcEndpointAccessArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_opensearch_authorize_vpc_endpoint_access", resourceName);
  }

  get account(): string {
    return `${this.resourceType}.${this.resourceName}.account`;
  }

  get authorized_principal(): string {
    return `${this.resourceType}.${this.resourceName}.authorized_principal`;
  }

  get domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name`;
  }
}
