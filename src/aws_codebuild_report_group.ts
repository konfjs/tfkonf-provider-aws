import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCodebuildReportGroupArgsExportConfigS3Destination {
  bucket: string;
  encryption_disabled?: boolean;
  encryption_key: string;
  packaging?: string;
  path?: string;
}

export interface AwsCodebuildReportGroupArgsExportConfig {
  type: string;
  s3_destination?: AwsCodebuildReportGroupArgsExportConfigS3Destination;
}

export interface AwsCodebuildReportGroupArgs {
  delete_reports?: boolean;
  name: string;
  tags?: { [key: string]: string };
  type: string;
  export_config: AwsCodebuildReportGroupArgsExportConfig;
}

export class aws_codebuild_report_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCodebuildReportGroupArgs) {
    const meta = {export_config:{isBlock:true,s3_destination:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_codebuild_report_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get created(): string {
    return `${this.resourceType}.${this.resourceName}.created`;
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

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
