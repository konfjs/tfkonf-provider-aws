import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAutoscalingScheduleArgs {
  autoscaling_group_name: string;
  scheduled_action_name: string;
}

export class aws_autoscaling_schedule extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAutoscalingScheduleArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_autoscaling_schedule", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get autoscaling_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.autoscaling_group_name`;
  }

  get desired_capacity(): string {
    return `${this.resourceType}.${this.resourceName}.desired_capacity`;
  }

  get end_time(): string {
    return `${this.resourceType}.${this.resourceName}.end_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get max_size(): string {
    return `${this.resourceType}.${this.resourceName}.max_size`;
  }

  get min_size(): string {
    return `${this.resourceType}.${this.resourceName}.min_size`;
  }

  get recurrence(): string {
    return `${this.resourceType}.${this.resourceName}.recurrence`;
  }

  get scheduled_action_name(): string {
    return `${this.resourceType}.${this.resourceName}.scheduled_action_name`;
  }

  get start_time(): string {
    return `${this.resourceType}.${this.resourceName}.start_time`;
  }

  get time_zone(): string {
    return `${this.resourceType}.${this.resourceName}.time_zone`;
  }
}
