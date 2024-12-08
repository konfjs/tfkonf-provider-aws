import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEgressOnlyInternetGatewayArgs {
  tags?: { [key: string]: string };
  vpc_id: string;
}

export class aws_egress_only_internet_gateway extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsEgressOnlyInternetGatewayArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_egress_only_internet_gateway", resourceName);
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
