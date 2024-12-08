import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudwatchEventEndpointArgsEventBus {
  event_bus_arn: string;
}

export interface AwsCloudwatchEventEndpointArgsReplicationConfig {
  state?: string;
}

export interface AwsCloudwatchEventEndpointArgsRoutingConfigFailoverConfigPrimary {
  health_check?: string;
}

export interface AwsCloudwatchEventEndpointArgsRoutingConfigFailoverConfigSecondary {
  route?: string;
}

export interface AwsCloudwatchEventEndpointArgsRoutingConfigFailoverConfig {
  primary: AwsCloudwatchEventEndpointArgsRoutingConfigFailoverConfigPrimary;
  secondary: AwsCloudwatchEventEndpointArgsRoutingConfigFailoverConfigSecondary;
}

export interface AwsCloudwatchEventEndpointArgsRoutingConfig {
  failover_config: AwsCloudwatchEventEndpointArgsRoutingConfigFailoverConfig;
}

export interface AwsCloudwatchEventEndpointArgs {
  description?: string;
  name: string;
  role_arn?: string;
  event_bus: AwsCloudwatchEventEndpointArgsEventBus[];
  replication_config?: AwsCloudwatchEventEndpointArgsReplicationConfig;
  routing_config: AwsCloudwatchEventEndpointArgsRoutingConfig;
}

export class aws_cloudwatch_event_endpoint extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCloudwatchEventEndpointArgs) {
    const meta = {event_bus:{isBlock:true},replication_config:{isBlock:true},routing_config:{isBlock:true,failover_config:{isBlock:true,primary:{isBlock:true},secondary:{isBlock:true}}}};
    super(terraformConfig, "resource", args, meta, "aws_cloudwatch_event_endpoint", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get endpoint_url(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint_url`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
