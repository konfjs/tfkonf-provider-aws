import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsDatapipelinePipelineArgs {
  pipeline_id: string;
}

export class data_aws_datapipeline_pipeline extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsDatapipelinePipelineArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_datapipeline_pipeline", resourceName);
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get pipeline_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.pipeline_id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
