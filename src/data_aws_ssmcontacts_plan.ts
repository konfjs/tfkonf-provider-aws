import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSsmcontactsPlanArgs {
  contact_id: string;
}

export class data_aws_ssmcontacts_plan extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsSsmcontactsPlanArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_ssmcontacts_plan", resourceName);
  }

  get contact_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.contact_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get stage(): string {
    return `data.${this.resourceType}.${this.resourceName}.stage`;
  }
}
