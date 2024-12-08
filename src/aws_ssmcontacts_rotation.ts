import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsmcontactsRotationArgsRecurrenceDailySettings {
  hour_of_day: number;
  minute_of_hour: number;
}

export interface AwsSsmcontactsRotationArgsRecurrenceMonthlySettingsHandOffTime {
  hour_of_day: number;
  minute_of_hour: number;
}

export interface AwsSsmcontactsRotationArgsRecurrenceMonthlySettings {
  day_of_month: number;
  hand_off_time?: AwsSsmcontactsRotationArgsRecurrenceMonthlySettingsHandOffTime[];
}

export interface AwsSsmcontactsRotationArgsRecurrenceShiftCoveragesCoverageTimesEnd {
  hour_of_day: number;
  minute_of_hour: number;
}

export interface AwsSsmcontactsRotationArgsRecurrenceShiftCoveragesCoverageTimesStart {
  hour_of_day: number;
  minute_of_hour: number;
}

export interface AwsSsmcontactsRotationArgsRecurrenceShiftCoveragesCoverageTimes {
  end?: AwsSsmcontactsRotationArgsRecurrenceShiftCoveragesCoverageTimesEnd[];
  start?: AwsSsmcontactsRotationArgsRecurrenceShiftCoveragesCoverageTimesStart[];
}

export interface AwsSsmcontactsRotationArgsRecurrenceShiftCoverages {
  map_block_key: string;
  coverage_times?: AwsSsmcontactsRotationArgsRecurrenceShiftCoveragesCoverageTimes[];
}

export interface AwsSsmcontactsRotationArgsRecurrenceWeeklySettingsHandOffTime {
  hour_of_day: number;
  minute_of_hour: number;
}

export interface AwsSsmcontactsRotationArgsRecurrenceWeeklySettings {
  day_of_week: string;
  hand_off_time?: AwsSsmcontactsRotationArgsRecurrenceWeeklySettingsHandOffTime[];
}

export interface AwsSsmcontactsRotationArgsRecurrence {
  number_of_on_calls: number;
  recurrence_multiplier: number;
  daily_settings?: AwsSsmcontactsRotationArgsRecurrenceDailySettings[];
  monthly_settings?: AwsSsmcontactsRotationArgsRecurrenceMonthlySettings[];
  shift_coverages?: AwsSsmcontactsRotationArgsRecurrenceShiftCoverages[];
  weekly_settings?: AwsSsmcontactsRotationArgsRecurrenceWeeklySettings[];
}

export interface AwsSsmcontactsRotationArgs {
  contact_ids: string[];
  name: string;
  start_time?: string;
  tags?: { [key: string]: string };
  time_zone_id: string;
  recurrence?: AwsSsmcontactsRotationArgsRecurrence[];
}

export class aws_ssmcontacts_rotation extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSsmcontactsRotationArgs) {
    const meta = {recurrence:{isBlock:true,daily_settings:{isBlock:true},monthly_settings:{isBlock:true,hand_off_time:{isBlock:true}},shift_coverages:{isBlock:true,coverage_times:{isBlock:true,end:{isBlock:true},start:{isBlock:true}}},weekly_settings:{isBlock:true,hand_off_time:{isBlock:true}}}};
    super(terraformConfig, "resource", args, meta, "aws_ssmcontacts_rotation", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get contact_ids(): string {
    return `${this.resourceType}.${this.resourceName}.contact_ids`;
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

  get time_zone_id(): string {
    return `${this.resourceType}.${this.resourceName}.time_zone_id`;
  }
}
