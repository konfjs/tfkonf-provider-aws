import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsQuicksightRefreshScheduleArgsScheduleScheduleFrequencyRefreshOnDay {
  day_of_month?: string;
  day_of_week?: string;
}

export interface AwsQuicksightRefreshScheduleArgsScheduleScheduleFrequency {
  interval: string;
  refresh_on_day?: AwsQuicksightRefreshScheduleArgsScheduleScheduleFrequencyRefreshOnDay[];
}

export interface AwsQuicksightRefreshScheduleArgsSchedule {
  refresh_type: string;
  schedule_frequency?: AwsQuicksightRefreshScheduleArgsScheduleScheduleFrequency[];
}

export interface AwsQuicksightRefreshScheduleArgs {
  data_set_id: string;
  schedule_id: string;
  schedule?: AwsQuicksightRefreshScheduleArgsSchedule[];
}

export class aws_quicksight_refresh_schedule extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsQuicksightRefreshScheduleArgs) {
    const meta = {schedule:{isBlock:true,schedule_frequency:{isBlock:true,refresh_on_day:{isBlock:true}}}};
    super(terraformConfig, "resource", args, meta, "aws_quicksight_refresh_schedule", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get aws_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.aws_account_id`;
  }

  get data_set_id(): string {
    return `${this.resourceType}.${this.resourceName}.data_set_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get schedule_id(): string {
    return `${this.resourceType}.${this.resourceName}.schedule_id`;
  }
}
