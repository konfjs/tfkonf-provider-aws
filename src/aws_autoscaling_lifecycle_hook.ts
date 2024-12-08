import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAutoscalingLifecycleHookArgs {
  autoscaling_group_name: string;
  heartbeat_timeout?: number;
  lifecycle_transition: string;
  name: string;
  notification_metadata?: string;
  notification_target_arn?: string;
  role_arn?: string;
}

export class aws_autoscaling_lifecycle_hook extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAutoscalingLifecycleHookArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_autoscaling_lifecycle_hook", resourceName);
  }

  get autoscaling_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.autoscaling_group_name`;
  }

  get default_result(): string {
    return `${this.resourceType}.${this.resourceName}.default_result`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get lifecycle_transition(): string {
    return `${this.resourceType}.${this.resourceName}.lifecycle_transition`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
