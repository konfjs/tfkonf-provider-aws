import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEc2NetworkInsightsAnalysisArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsEc2NetworkInsightsAnalysisArgs {
  filter?: DataAwsEc2NetworkInsightsAnalysisArgsFilter[];
}

export class data_aws_ec2_network_insights_analysis extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEc2NetworkInsightsAnalysisArgs) {
    const meta = {filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_ec2_network_insights_analysis", resourceName);
  }

  get alternate_path_hints(): string {
    return `data.${this.resourceType}.${this.resourceName}.alternate_path_hints`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get explanations(): string {
    return `data.${this.resourceType}.${this.resourceName}.explanations`;
  }

  get filter_in_arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.filter_in_arns`;
  }

  get forward_path_components(): string {
    return `data.${this.resourceType}.${this.resourceName}.forward_path_components`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get network_insights_analysis_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.network_insights_analysis_id`;
  }

  get network_insights_path_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.network_insights_path_id`;
  }

  get path_found(): string {
    return `data.${this.resourceType}.${this.resourceName}.path_found`;
  }

  get return_path_components(): string {
    return `data.${this.resourceType}.${this.resourceName}.return_path_components`;
  }

  get start_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.start_date`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get status_message(): string {
    return `data.${this.resourceType}.${this.resourceName}.status_message`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get warning_message(): string {
    return `data.${this.resourceType}.${this.resourceName}.warning_message`;
  }
}
