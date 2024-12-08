import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGuarddutyFilterArgsFindingCriteriaCriterion {
  equals?: string[];
  field: string;
  greater_than?: string;
  greater_than_or_equal?: string;
  less_than?: string;
  less_than_or_equal?: string;
  not_equals?: string[];
}

export interface AwsGuarddutyFilterArgsFindingCriteria {
  criterion: AwsGuarddutyFilterArgsFindingCriteriaCriterion[];
}

export interface AwsGuarddutyFilterArgs {
  action: string;
  description?: string;
  detector_id: string;
  name: string;
  rank: number;
  tags?: { [key: string]: string };
  finding_criteria: AwsGuarddutyFilterArgsFindingCriteria;
}

export class aws_guardduty_filter extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsGuarddutyFilterArgs) {
    const meta = {finding_criteria:{isBlock:true,criterion:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_guardduty_filter", resourceName);
  }

  get action(): string {
    return `${this.resourceType}.${this.resourceName}.action`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get detector_id(): string {
    return `${this.resourceType}.${this.resourceName}.detector_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get rank(): string {
    return `${this.resourceType}.${this.resourceName}.rank`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
