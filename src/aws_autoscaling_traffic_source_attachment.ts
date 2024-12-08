import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAutoscalingTrafficSourceAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsAutoscalingTrafficSourceAttachmentArgsTrafficSource {
  identifier: string;
  type: string;
}

export interface AwsAutoscalingTrafficSourceAttachmentArgs {
  autoscaling_group_name: string;
  timeouts?: AwsAutoscalingTrafficSourceAttachmentArgsTimeouts;
  traffic_source?: AwsAutoscalingTrafficSourceAttachmentArgsTrafficSource;
}

export class aws_autoscaling_traffic_source_attachment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAutoscalingTrafficSourceAttachmentArgs) {
    const meta = {timeouts:{isBlock:true},traffic_source:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_autoscaling_traffic_source_attachment", resourceName);
  }

  get autoscaling_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.autoscaling_group_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
