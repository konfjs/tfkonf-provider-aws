import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2NetworkInsightsAnalysisArgs {
  filter_in_arns?: string[];
  network_insights_path_id: string;
  tags?: { [key: string]: string };
  wait_for_completion?: boolean;
}

export class aws_ec2_network_insights_analysis extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEc2NetworkInsightsAnalysisArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ec2_network_insights_analysis", resourceName);
  }

  get alternate_path_hints(): string {
    return `${this.resourceType}.${this.resourceName}.alternate_path_hints`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get explanations(): string {
    return `${this.resourceType}.${this.resourceName}.explanations`;
  }

  get forward_path_components(): string {
    return `${this.resourceType}.${this.resourceName}.forward_path_components`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get network_insights_path_id(): string {
    return `${this.resourceType}.${this.resourceName}.network_insights_path_id`;
  }

  get path_found(): string {
    return `${this.resourceType}.${this.resourceName}.path_found`;
  }

  get return_path_components(): string {
    return `${this.resourceType}.${this.resourceName}.return_path_components`;
  }

  get start_date(): string {
    return `${this.resourceType}.${this.resourceName}.start_date`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get status_message(): string {
    return `${this.resourceType}.${this.resourceName}.status_message`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get warning_message(): string {
    return `${this.resourceType}.${this.resourceName}.warning_message`;
  }
}
