import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCurReportDefinitionArgs {
  additional_artifacts?: string[];
  additional_schema_elements: string[];
  compression: string;
  format: string;
  refresh_closed_reports?: boolean;
  report_name: string;
  report_versioning?: string;
  s3_bucket: string;
  s3_prefix?: string;
  s3_region: string;
  tags?: { [key: string]: string };
  time_unit: string;
}

export class aws_cur_report_definition extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCurReportDefinitionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_cur_report_definition", resourceName);
  }

  get additional_schema_elements(): string {
    return `${this.resourceType}.${this.resourceName}.additional_schema_elements`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get compression(): string {
    return `${this.resourceType}.${this.resourceName}.compression`;
  }

  get format(): string {
    return `${this.resourceType}.${this.resourceName}.format`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get report_name(): string {
    return `${this.resourceType}.${this.resourceName}.report_name`;
  }

  get s3_bucket(): string {
    return `${this.resourceType}.${this.resourceName}.s3_bucket`;
  }

  get s3_region(): string {
    return `${this.resourceType}.${this.resourceName}.s3_region`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get time_unit(): string {
    return `${this.resourceType}.${this.resourceName}.time_unit`;
  }
}
