import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsPinpointEmailChannelArgs {
  application_id: string;
  configuration_set?: string;
  enabled?: boolean;
  from_address: string;
  identity: string;
  role_arn?: string;
}

export class aws_pinpoint_email_channel extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsPinpointEmailChannelArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_pinpoint_email_channel", resourceName);
  }

  get application_id(): string {
    return `${this.resourceType}.${this.resourceName}.application_id`;
  }

  get from_address(): string {
    return `${this.resourceType}.${this.resourceName}.from_address`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get identity(): string {
    return `${this.resourceType}.${this.resourceName}.identity`;
  }

  get messages_per_second(): string {
    return `${this.resourceType}.${this.resourceName}.messages_per_second`;
  }
}
