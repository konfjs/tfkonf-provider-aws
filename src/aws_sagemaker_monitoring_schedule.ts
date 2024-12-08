import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSagemakerMonitoringScheduleArgsMonitoringScheduleConfigScheduleConfig {
  schedule_expression: string;
}

export interface AwsSagemakerMonitoringScheduleArgsMonitoringScheduleConfig {
  monitoring_job_definition_name: string;
  monitoring_type: string;
  schedule_config?: AwsSagemakerMonitoringScheduleArgsMonitoringScheduleConfigScheduleConfig;
}

export interface AwsSagemakerMonitoringScheduleArgs {
  tags?: { [key: string]: string };
  monitoring_schedule_config: AwsSagemakerMonitoringScheduleArgsMonitoringScheduleConfig;
}

export class aws_sagemaker_monitoring_schedule extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSagemakerMonitoringScheduleArgs) {
    const meta = {monitoring_schedule_config:{isBlock:true,schedule_config:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_sagemaker_monitoring_schedule", resourceName);
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

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
