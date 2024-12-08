import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMacie2FindingsFilterArgsFindingCriteriaCriterion {
  eq?: string[];
  eq_exact_match?: string[];
  field: string;
  gt?: string;
  gte?: string;
  lt?: string;
  lte?: string;
  neq?: string[];
}

export interface AwsMacie2FindingsFilterArgsFindingCriteria {
  criterion?: AwsMacie2FindingsFilterArgsFindingCriteriaCriterion[];
}

export interface AwsMacie2FindingsFilterArgs {
  action: string;
  description?: string;
  tags?: { [key: string]: string };
  finding_criteria: AwsMacie2FindingsFilterArgsFindingCriteria;
}

export class aws_macie2_findings_filter extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsMacie2FindingsFilterArgs) {
    const meta = {finding_criteria:{isBlock:true,criterion:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_macie2_findings_filter", resourceName);
  }

  get action(): string {
    return `${this.resourceType}.${this.resourceName}.action`;
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

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get position(): string {
    return `${this.resourceType}.${this.resourceName}.position`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
