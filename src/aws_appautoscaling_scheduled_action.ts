import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppautoscalingScheduledActionArgsScalableTargetAction {
  max_capacity?: string;
  min_capacity?: string;
}

export interface AwsAppautoscalingScheduledActionArgs {
  end_time?: string;
  name: string;
  resource_id: string;
  scalable_dimension: string;
  schedule: string;
  service_namespace: string;
  start_time?: string;
  timezone?: string;
  scalable_target_action: AwsAppautoscalingScheduledActionArgsScalableTargetAction;
}

export class aws_appautoscaling_scheduled_action extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAppautoscalingScheduledActionArgs) {
    const meta = {scalable_target_action:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_appautoscaling_scheduled_action", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get resource_id(): string {
    return `${this.resourceType}.${this.resourceName}.resource_id`;
  }

  get scalable_dimension(): string {
    return `${this.resourceType}.${this.resourceName}.scalable_dimension`;
  }

  get schedule(): string {
    return `${this.resourceType}.${this.resourceName}.schedule`;
  }

  get service_namespace(): string {
    return `${this.resourceType}.${this.resourceName}.service_namespace`;
  }
}
