import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAutoscalingGroupTagArgsTag {
  key: string;
  propagate_at_launch: boolean;
  value: string;
}

export interface AwsAutoscalingGroupTagArgs {
  autoscaling_group_name: string;
  tag: AwsAutoscalingGroupTagArgsTag;
}

export class aws_autoscaling_group_tag extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAutoscalingGroupTagArgs) {
    const meta = {tag:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_autoscaling_group_tag", resourceName);
  }

  get autoscaling_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.autoscaling_group_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
