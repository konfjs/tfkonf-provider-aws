import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCodeguruprofilerProfilingGroupArgs {
  name: string;
}

export class data_aws_codeguruprofiler_profiling_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsCodeguruprofilerProfilingGroupArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_codeguruprofiler_profiling_group", resourceName);
  }

  get agent_orchestration_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.agent_orchestration_config`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get compute_platform(): string {
    return `data.${this.resourceType}.${this.resourceName}.compute_platform`;
  }

  get created_at(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_at`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get profiling_status(): string {
    return `data.${this.resourceType}.${this.resourceName}.profiling_status`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get updated_at(): string {
    return `data.${this.resourceType}.${this.resourceName}.updated_at`;
  }
}
