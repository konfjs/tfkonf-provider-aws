import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsGuarddutyFindingIdsArgs {
  detector_id: string;
}

export class data_aws_guardduty_finding_ids extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsGuarddutyFindingIdsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_guardduty_finding_ids", resourceName);
  }

  get detector_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.detector_id`;
  }

  get finding_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.finding_ids`;
  }

  get has_findings(): string {
    return `data.${this.resourceType}.${this.resourceName}.has_findings`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
