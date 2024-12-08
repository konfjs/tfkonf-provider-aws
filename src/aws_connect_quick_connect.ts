import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConnectQuickConnectArgsQuickConnectConfigPhoneConfig {
  phone_number: string;
}

export interface AwsConnectQuickConnectArgsQuickConnectConfigQueueConfig {
  contact_flow_id: string;
  queue_id: string;
}

export interface AwsConnectQuickConnectArgsQuickConnectConfigUserConfig {
  contact_flow_id: string;
  user_id: string;
}

export interface AwsConnectQuickConnectArgsQuickConnectConfig {
  quick_connect_type: string;
  phone_config?: AwsConnectQuickConnectArgsQuickConnectConfigPhoneConfig[];
  queue_config?: AwsConnectQuickConnectArgsQuickConnectConfigQueueConfig[];
  user_config?: AwsConnectQuickConnectArgsQuickConnectConfigUserConfig[];
}

export interface AwsConnectQuickConnectArgs {
  description?: string;
  instance_id: string;
  name: string;
  tags?: { [key: string]: string };
  quick_connect_config: AwsConnectQuickConnectArgsQuickConnectConfig;
}

export class aws_connect_quick_connect extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsConnectQuickConnectArgs) {
    const meta = {quick_connect_config:{isBlock:true,phone_config:{isBlock:true},queue_config:{isBlock:true},user_config:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_connect_quick_connect", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get quick_connect_id(): string {
    return `${this.resourceType}.${this.resourceName}.quick_connect_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
