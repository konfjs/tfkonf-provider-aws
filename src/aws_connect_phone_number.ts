import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConnectPhoneNumberArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsConnectPhoneNumberArgs {
  country_code: string;
  description?: string;
  prefix?: string;
  tags?: { [key: string]: string };
  target_arn: string;
  type: string;
  timeouts?: AwsConnectPhoneNumberArgsTimeouts;
}

export class aws_connect_phone_number extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsConnectPhoneNumberArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_connect_phone_number", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get country_code(): string {
    return `${this.resourceType}.${this.resourceName}.country_code`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get phone_number(): string {
    return `${this.resourceType}.${this.resourceName}.phone_number`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get target_arn(): string {
    return `${this.resourceType}.${this.resourceName}.target_arn`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
