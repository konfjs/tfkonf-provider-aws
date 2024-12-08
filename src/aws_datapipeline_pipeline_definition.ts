import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDatapipelinePipelineDefinitionArgsParameterObjectAttribute {
  key: string;
  string_value: string;
}

export interface AwsDatapipelinePipelineDefinitionArgsParameterObject {
  id: string;
  attribute?: AwsDatapipelinePipelineDefinitionArgsParameterObjectAttribute[];
}

export interface AwsDatapipelinePipelineDefinitionArgsParameterValue {
  id: string;
  string_value: string;
}

export interface AwsDatapipelinePipelineDefinitionArgsPipelineObjectField {
  key: string;
  ref_value?: string;
  string_value?: string;
}

export interface AwsDatapipelinePipelineDefinitionArgsPipelineObject {
  id: string;
  name: string;
  field?: AwsDatapipelinePipelineDefinitionArgsPipelineObjectField[];
}

export interface AwsDatapipelinePipelineDefinitionArgs {
  pipeline_id: string;
  parameter_object?: AwsDatapipelinePipelineDefinitionArgsParameterObject[];
  parameter_value?: AwsDatapipelinePipelineDefinitionArgsParameterValue[];
  pipeline_object: AwsDatapipelinePipelineDefinitionArgsPipelineObject[];
}

export class aws_datapipeline_pipeline_definition extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDatapipelinePipelineDefinitionArgs) {
    const meta = {parameter_object:{isBlock:true,attribute:{isBlock:true}},parameter_value:{isBlock:true},pipeline_object:{isBlock:true,field:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_datapipeline_pipeline_definition", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get pipeline_id(): string {
    return `${this.resourceType}.${this.resourceName}.pipeline_id`;
  }
}
