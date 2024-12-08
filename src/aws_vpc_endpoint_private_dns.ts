import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcEndpointPrivateDnsArgs {
  private_dns_enabled: boolean;
  vpc_endpoint_id: string;
}

export class aws_vpc_endpoint_private_dns extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsVpcEndpointPrivateDnsArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_vpc_endpoint_private_dns", resourceName);
  }

  get private_dns_enabled(): string {
    return `${this.resourceType}.${this.resourceName}.private_dns_enabled`;
  }

  get vpc_endpoint_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_endpoint_id`;
  }
}
