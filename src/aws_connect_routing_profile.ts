import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConnectRoutingProfileArgsMediaConcurrencies {
  channel: string;
  concurrency: number;
}

export interface AwsConnectRoutingProfileArgsQueueConfigs {
  channel: string;
  delay: number;
  priority: number;
  queue_id: string;
}

export interface AwsConnectRoutingProfileArgs {
  default_outbound_queue_id: string;
  description: string;
  instance_id: string;
  name: string;
  tags?: { [key: string]: string };
  media_concurrencies: AwsConnectRoutingProfileArgsMediaConcurrencies[];
  queue_configs?: AwsConnectRoutingProfileArgsQueueConfigs[];
}

export class aws_connect_routing_profile extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsConnectRoutingProfileArgs) {
    const meta = {media_concurrencies:{isBlock:true},queue_configs:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_connect_routing_profile", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get default_outbound_queue_id(): string {
    return `${this.resourceType}.${this.resourceName}.default_outbound_queue_id`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
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

  get routing_profile_id(): string {
    return `${this.resourceType}.${this.resourceName}.routing_profile_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
