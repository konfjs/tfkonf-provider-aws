import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsPinpointAdmChannelArgs {
  application_id: string;
  client_id: string;
  client_secret: string;
  enabled?: boolean;
}

export class aws_pinpoint_adm_channel extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsPinpointAdmChannelArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_pinpoint_adm_channel", resourceName);
  }

  get application_id(): string {
    return `${this.resourceType}.${this.resourceName}.application_id`;
  }

  get client_id(): string {
    return `${this.resourceType}.${this.resourceName}.client_id`;
  }

  get client_secret(): string {
    return `${this.resourceType}.${this.resourceName}.client_secret`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
