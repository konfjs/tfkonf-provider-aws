import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsPinpointEventStreamArgs {
  application_id: string;
  destination_stream_arn: string;
  role_arn: string;
}

export class aws_pinpoint_event_stream extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsPinpointEventStreamArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_pinpoint_event_stream", resourceName);
  }

  get application_id(): string {
    return `${this.resourceType}.${this.resourceName}.application_id`;
  }

  get destination_stream_arn(): string {
    return `${this.resourceType}.${this.resourceName}.destination_stream_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }
}
