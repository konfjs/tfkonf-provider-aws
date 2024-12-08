import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsInternetGatewayArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsInternetGatewayArgs {
  tags?: { [key: string]: string };
  timeouts?: AwsInternetGatewayArgsTimeouts;
}

export class aws_internet_gateway extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsInternetGatewayArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_internet_gateway", resourceName);
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
