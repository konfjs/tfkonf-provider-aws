import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2CarrierGatewayArgs {
  tags?: { [key: string]: string };
  vpc_id: string;
}

export class aws_ec2_carrier_gateway extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEc2CarrierGatewayArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ec2_carrier_gateway", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
