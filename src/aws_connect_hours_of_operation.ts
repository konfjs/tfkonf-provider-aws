import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConnectHoursOfOperationArgsConfigEndTime {
  hours: number;
  minutes: number;
}

export interface AwsConnectHoursOfOperationArgsConfigStartTime {
  hours: number;
  minutes: number;
}

export interface AwsConnectHoursOfOperationArgsConfig {
  day: string;
  end_time: AwsConnectHoursOfOperationArgsConfigEndTime;
  start_time: AwsConnectHoursOfOperationArgsConfigStartTime;
}

export interface AwsConnectHoursOfOperationArgs {
  description?: string;
  instance_id: string;
  name: string;
  tags?: { [key: string]: string };
  time_zone: string;
  config: AwsConnectHoursOfOperationArgsConfig[];
}

export class aws_connect_hours_of_operation extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsConnectHoursOfOperationArgs) {
    const meta = {config:{isBlock:true,end_time:{isBlock:true},start_time:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_connect_hours_of_operation", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get hours_of_operation_id(): string {
    return `${this.resourceType}.${this.resourceName}.hours_of_operation_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get time_zone(): string {
    return `${this.resourceType}.${this.resourceName}.time_zone`;
  }
}
