import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsInternetGatewayAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsInternetGatewayAttachmentArgs {
  internet_gateway_id: string;
  vpc_id: string;
  timeouts?: AwsInternetGatewayAttachmentArgsTimeouts;
}

export class aws_internet_gateway_attachment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsInternetGatewayAttachmentArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_internet_gateway_attachment", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get internet_gateway_id(): string {
    return `${this.resourceType}.${this.resourceName}.internet_gateway_id`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
