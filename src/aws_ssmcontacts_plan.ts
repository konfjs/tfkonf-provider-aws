import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsmcontactsPlanArgsStageTargetChannelTargetInfo {
  contact_channel_id: string;
  retry_interval_in_minutes?: number;
}

export interface AwsSsmcontactsPlanArgsStageTargetContactTargetInfo {
  contact_id?: string;
  is_essential: boolean;
}

export interface AwsSsmcontactsPlanArgsStageTarget {
  channel_target_info?: AwsSsmcontactsPlanArgsStageTargetChannelTargetInfo;
  contact_target_info?: AwsSsmcontactsPlanArgsStageTargetContactTargetInfo;
}

export interface AwsSsmcontactsPlanArgsStage {
  duration_in_minutes: number;
  target?: AwsSsmcontactsPlanArgsStageTarget[];
}

export interface AwsSsmcontactsPlanArgs {
  contact_id: string;
  stage: AwsSsmcontactsPlanArgsStage[];
}

export class aws_ssmcontacts_plan extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSsmcontactsPlanArgs) {
    const meta = {stage:{isBlock:true,target:{isBlock:true,channel_target_info:{isBlock:true},contact_target_info:{isBlock:true}}}};
    super(terraformConfig, "resource", args, meta, "aws_ssmcontacts_plan", resourceName);
  }

  get contact_id(): string {
    return `${this.resourceType}.${this.resourceName}.contact_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
