import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAutoscalingAttachmentArgs {
  autoscaling_group_name: string;
  elb?: string;
  lb_target_group_arn?: string;
}

export class aws_autoscaling_attachment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAutoscalingAttachmentArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_autoscaling_attachment", resourceName);
  }

  get autoscaling_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.autoscaling_group_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
