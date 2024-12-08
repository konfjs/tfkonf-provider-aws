import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpnGatewayArgs {
  availability_zone?: string;
  tags?: { [key: string]: string };
}

export class aws_vpn_gateway extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsVpnGatewayArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_vpn_gateway", resourceName);
  }

  get amazon_side_asn(): string {
    return `${this.resourceType}.${this.resourceName}.amazon_side_asn`;
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

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
