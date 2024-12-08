import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCurReportDefinitionArgs {
  report_name: string;
}

export class data_aws_cur_report_definition extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsCurReportDefinitionArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_cur_report_definition", resourceName);
  }

  get additional_artifacts(): string {
    return `data.${this.resourceType}.${this.resourceName}.additional_artifacts`;
  }

  get additional_schema_elements(): string {
    return `data.${this.resourceType}.${this.resourceName}.additional_schema_elements`;
  }

  get compression(): string {
    return `data.${this.resourceType}.${this.resourceName}.compression`;
  }

  get format(): string {
    return `data.${this.resourceType}.${this.resourceName}.format`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get refresh_closed_reports(): string {
    return `data.${this.resourceType}.${this.resourceName}.refresh_closed_reports`;
  }

  get report_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.report_name`;
  }

  get report_versioning(): string {
    return `data.${this.resourceType}.${this.resourceName}.report_versioning`;
  }

  get s3_bucket(): string {
    return `data.${this.resourceType}.${this.resourceName}.s3_bucket`;
  }

  get s3_prefix(): string {
    return `data.${this.resourceType}.${this.resourceName}.s3_prefix`;
  }

  get s3_region(): string {
    return `data.${this.resourceType}.${this.resourceName}.s3_region`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get time_unit(): string {
    return `data.${this.resourceType}.${this.resourceName}.time_unit`;
  }
}
