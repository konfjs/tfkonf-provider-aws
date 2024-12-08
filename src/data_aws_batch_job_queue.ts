import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsBatchJobQueueArgs {
  name: string;
}

export class data_aws_batch_job_queue extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsBatchJobQueueArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_batch_job_queue", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get compute_environment_order(): string {
    return `data.${this.resourceType}.${this.resourceName}.compute_environment_order`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get job_state_time_limit_action(): string {
    return `data.${this.resourceType}.${this.resourceName}.job_state_time_limit_action`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get priority(): string {
    return `data.${this.resourceType}.${this.resourceName}.priority`;
  }

  get scheduling_policy_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.scheduling_policy_arn`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get status_reason(): string {
    return `data.${this.resourceType}.${this.resourceName}.status_reason`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
