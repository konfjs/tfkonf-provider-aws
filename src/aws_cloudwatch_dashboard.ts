import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudwatchDashboardArgs {
  dashboard_body: string;
  dashboard_name: string;
}

export class aws_cloudwatch_dashboard extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCloudwatchDashboardArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_cloudwatch_dashboard", resourceName);
  }

  get dashboard_arn(): string {
    return `${this.resourceType}.${this.resourceName}.dashboard_arn`;
  }

  get dashboard_body(): string {
    return `${this.resourceType}.${this.resourceName}.dashboard_body`;
  }

  get dashboard_name(): string {
    return `${this.resourceType}.${this.resourceName}.dashboard_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
