import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsDbEventCategoriesArgs {
  source_type?: string;
}

export class data_aws_db_event_categories extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsDbEventCategoriesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_db_event_categories", resourceName);
  }

  get event_categories(): string {
    return `data.${this.resourceType}.${this.resourceName}.event_categories`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
