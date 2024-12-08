import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAutoscalingNotificationArgs {
  group_names: string[];
  notifications: string[];
  topic_arn: string;
}

export class aws_autoscaling_notification extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAutoscalingNotificationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_autoscaling_notification", resourceName);
  }

  get group_names(): string {
    return `${this.resourceType}.${this.resourceName}.group_names`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get notifications(): string {
    return `${this.resourceType}.${this.resourceName}.notifications`;
  }

  get topic_arn(): string {
    return `${this.resourceType}.${this.resourceName}.topic_arn`;
  }
}
