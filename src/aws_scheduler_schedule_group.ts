import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSchedulerScheduleGroupArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsSchedulerScheduleGroupArgs {
  tags?: { [key: string]: string };
  timeouts?: AwsSchedulerScheduleGroupArgsTimeouts;
}

export class aws_scheduler_schedule_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSchedulerScheduleGroupArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_scheduler_schedule_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get creation_date(): string {
    return `${this.resourceType}.${this.resourceName}.creation_date`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_modification_date(): string {
    return `${this.resourceType}.${this.resourceName}.last_modification_date`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
