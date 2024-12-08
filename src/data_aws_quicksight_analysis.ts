import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsQuicksightAnalysisArgs {
  analysis_id: string;
}

export class data_aws_quicksight_analysis extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsQuicksightAnalysisArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_quicksight_analysis", resourceName);
  }

  get analysis_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.analysis_id`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get aws_account_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.aws_account_id`;
  }

  get created_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_time`;
  }

  get definition(): string {
    return `data.${this.resourceType}.${this.resourceName}.definition`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get last_published_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_published_time`;
  }

  get last_updated_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_updated_time`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get permissions(): string {
    return `data.${this.resourceType}.${this.resourceName}.permissions`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get theme_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.theme_arn`;
  }
}
