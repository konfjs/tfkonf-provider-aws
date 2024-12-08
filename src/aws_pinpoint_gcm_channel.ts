import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsPinpointGcmChannelArgs {
  api_key?: string;
  application_id: string;
  default_authentication_method?: string;
  enabled?: boolean;
  service_json?: string;
}

export class aws_pinpoint_gcm_channel extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsPinpointGcmChannelArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_pinpoint_gcm_channel", resourceName);
  }

  get application_id(): string {
    return `${this.resourceType}.${this.resourceName}.application_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
