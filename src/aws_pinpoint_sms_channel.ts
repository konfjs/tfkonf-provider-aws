import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsPinpointSmsChannelArgs {
  application_id: string;
  enabled?: boolean;
  sender_id?: string;
  short_code?: string;
}

export class aws_pinpoint_sms_channel extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsPinpointSmsChannelArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_pinpoint_sms_channel", resourceName);
  }

  get application_id(): string {
    return `${this.resourceType}.${this.resourceName}.application_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get promotional_messages_per_second(): string {
    return `${this.resourceType}.${this.resourceName}.promotional_messages_per_second`;
  }

  get transactional_messages_per_second(): string {
    return `${this.resourceType}.${this.resourceName}.transactional_messages_per_second`;
  }
}
