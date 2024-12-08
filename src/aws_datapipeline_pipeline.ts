import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDatapipelinePipelineArgs {
  description?: string;
  name: string;
  tags?: { [key: string]: string };
}

export class aws_datapipeline_pipeline extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDatapipelinePipelineArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_datapipeline_pipeline", resourceName);
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
}
