import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEmrReleaseLabelsArgsFilters {
  application?: string;
  prefix?: string;
}

export interface DataAwsEmrReleaseLabelsArgs {
  filters?: DataAwsEmrReleaseLabelsArgsFilters;
}

export class data_aws_emr_release_labels extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEmrReleaseLabelsArgs) {
    const meta = {filters:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_emr_release_labels", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get release_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.release_labels`;
  }
}
