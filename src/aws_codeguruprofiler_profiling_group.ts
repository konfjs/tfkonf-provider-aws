import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCodeguruprofilerProfilingGroupArgsAgentOrchestrationConfig {
  profiling_enabled: boolean;
}

export interface AwsCodeguruprofilerProfilingGroupArgs {
  name: string;
  tags?: { [key: string]: string };
  agent_orchestration_config?: AwsCodeguruprofilerProfilingGroupArgsAgentOrchestrationConfig[];
}

export class aws_codeguruprofiler_profiling_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCodeguruprofilerProfilingGroupArgs) {
    const meta = {agent_orchestration_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_codeguruprofiler_profiling_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get compute_platform(): string {
    return `${this.resourceType}.${this.resourceName}.compute_platform`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
