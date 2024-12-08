import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsBatchJobQueueArgsComputeEnvironmentOrder {
  compute_environment: string;
  order: number;
}

export interface AwsBatchJobQueueArgsJobStateTimeLimitAction {
  action: string;
  max_time_seconds: number;
  reason: string;
  state: string;
}

export interface AwsBatchJobQueueArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsBatchJobQueueArgs {
  compute_environments?: string[];
  name: string;
  priority: number;
  scheduling_policy_arn?: string;
  state: string;
  tags?: { [key: string]: string };
  compute_environment_order?: AwsBatchJobQueueArgsComputeEnvironmentOrder[];
  job_state_time_limit_action?: AwsBatchJobQueueArgsJobStateTimeLimitAction[];
  timeouts?: AwsBatchJobQueueArgsTimeouts;
}

export class aws_batch_job_queue extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsBatchJobQueueArgs) {
    const meta = {compute_environment_order:{isBlock:true},job_state_time_limit_action:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_batch_job_queue", resourceName);
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

  get priority(): string {
    return `${this.resourceType}.${this.resourceName}.priority`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
