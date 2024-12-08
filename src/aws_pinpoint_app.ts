import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsPinpointAppArgsCampaignHook {
  lambda_function_name?: string;
  mode?: string;
  web_url?: string;
}

export interface AwsPinpointAppArgsLimits {
  daily?: number;
  maximum_duration?: number;
  messages_per_second?: number;
  total?: number;
}

export interface AwsPinpointAppArgsQuietTime {
  end?: string;
  start?: string;
}

export interface AwsPinpointAppArgs {
  tags?: { [key: string]: string };
  campaign_hook?: AwsPinpointAppArgsCampaignHook;
  limits?: AwsPinpointAppArgsLimits;
  quiet_time?: AwsPinpointAppArgsQuietTime;
}

export class aws_pinpoint_app extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsPinpointAppArgs) {
    const meta = {campaign_hook:{isBlock:true},limits:{isBlock:true},quiet_time:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_pinpoint_app", resourceName);
  }

  get application_id(): string {
    return `${this.resourceType}.${this.resourceName}.application_id`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
