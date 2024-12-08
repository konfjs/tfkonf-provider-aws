import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsPinpointApnsVoipChannelArgs {
  application_id: string;
  bundle_id?: string;
  certificate?: string;
  default_authentication_method?: string;
  enabled?: boolean;
  private_key?: string;
  team_id?: string;
  token_key?: string;
  token_key_id?: string;
}

export class aws_pinpoint_apns_voip_channel extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsPinpointApnsVoipChannelArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_pinpoint_apns_voip_channel", resourceName);
  }

  get application_id(): string {
    return `${this.resourceType}.${this.resourceName}.application_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
