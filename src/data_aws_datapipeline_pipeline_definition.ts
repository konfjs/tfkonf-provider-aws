import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsDatapipelinePipelineDefinitionArgsParameterValue {
}

export interface DataAwsDatapipelinePipelineDefinitionArgs {
  pipeline_id: string;
  parameter_value?: DataAwsDatapipelinePipelineDefinitionArgsParameterValue[];
}

export class data_aws_datapipeline_pipeline_definition extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsDatapipelinePipelineDefinitionArgs) {
    const meta = {parameter_value:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_datapipeline_pipeline_definition", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get parameter_object(): string {
    return `data.${this.resourceType}.${this.resourceName}.parameter_object`;
  }

  get pipeline_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.pipeline_id`;
  }

  get pipeline_object(): string {
    return `data.${this.resourceType}.${this.resourceName}.pipeline_object`;
  }
}
