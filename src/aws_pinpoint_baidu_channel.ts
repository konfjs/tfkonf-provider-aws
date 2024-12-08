import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsPinpointBaiduChannelArgs {
  api_key: string;
  application_id: string;
  enabled?: boolean;
  secret_key: string;
}

export class aws_pinpoint_baidu_channel extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsPinpointBaiduChannelArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_pinpoint_baidu_channel", resourceName);
  }

  get api_key(): string {
    return `${this.resourceType}.${this.resourceName}.api_key`;
  }

  get application_id(): string {
    return `${this.resourceType}.${this.resourceName}.application_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get secret_key(): string {
    return `${this.resourceType}.${this.resourceName}.secret_key`;
  }
}
