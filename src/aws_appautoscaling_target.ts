import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppautoscalingTargetArgsSuspendedState {
  dynamic_scaling_in_suspended?: boolean;
  dynamic_scaling_out_suspended?: boolean;
  scheduled_scaling_suspended?: boolean;
}

export interface AwsAppautoscalingTargetArgs {
  max_capacity: number;
  min_capacity: number;
  resource_id: string;
  scalable_dimension: string;
  service_namespace: string;
  tags?: { [key: string]: string };
  suspended_state?: AwsAppautoscalingTargetArgsSuspendedState;
}

export class aws_appautoscaling_target extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAppautoscalingTargetArgs) {
    const meta = {suspended_state:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_appautoscaling_target", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get max_capacity(): string {
    return `${this.resourceType}.${this.resourceName}.max_capacity`;
  }

  get min_capacity(): string {
    return `${this.resourceType}.${this.resourceName}.min_capacity`;
  }

  get resource_id(): string {
    return `${this.resourceType}.${this.resourceName}.resource_id`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get scalable_dimension(): string {
    return `${this.resourceType}.${this.resourceName}.scalable_dimension`;
  }

  get service_namespace(): string {
    return `${this.resourceType}.${this.resourceName}.service_namespace`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
