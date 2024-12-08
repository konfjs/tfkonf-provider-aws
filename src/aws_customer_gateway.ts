import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCustomerGatewayArgs {
  bgp_asn?: string;
  bgp_asn_extended?: string;
  certificate_arn?: string;
  device_name?: string;
  ip_address?: string;
  tags?: { [key: string]: string };
  type: string;
}

export class aws_customer_gateway extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCustomerGatewayArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_customer_gateway", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
