import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcEndpointConnectionNotificationArgs {
  connection_events: string[];
  connection_notification_arn: string;
  vpc_endpoint_id?: string;
  vpc_endpoint_service_id?: string;
}

export class aws_vpc_endpoint_connection_notification extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsVpcEndpointConnectionNotificationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_vpc_endpoint_connection_notification", resourceName);
  }

  get connection_events(): string {
    return `${this.resourceType}.${this.resourceName}.connection_events`;
  }

  get connection_notification_arn(): string {
    return `${this.resourceType}.${this.resourceName}.connection_notification_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get notification_type(): string {
    return `${this.resourceType}.${this.resourceName}.notification_type`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }
}
