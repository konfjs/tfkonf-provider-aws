import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSagemakerPipelineArgsParallelismConfiguration {
  max_parallel_execution_steps: number;
}

export interface AwsSagemakerPipelineArgsPipelineDefinitionS3Location {
  bucket: string;
  object_key: string;
  version_id?: string;
}

export interface AwsSagemakerPipelineArgs {
  pipeline_definition?: string;
  pipeline_description?: string;
  pipeline_display_name: string;
  pipeline_name: string;
  role_arn?: string;
  tags?: { [key: string]: string };
  parallelism_configuration?: AwsSagemakerPipelineArgsParallelismConfiguration;
  pipeline_definition_s3_location?: AwsSagemakerPipelineArgsPipelineDefinitionS3Location;
}

export class aws_sagemaker_pipeline extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSagemakerPipelineArgs) {
    const meta = {parallelism_configuration:{isBlock:true},pipeline_definition_s3_location:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_sagemaker_pipeline", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get pipeline_display_name(): string {
    return `${this.resourceType}.${this.resourceName}.pipeline_display_name`;
  }

  get pipeline_name(): string {
    return `${this.resourceType}.${this.resourceName}.pipeline_name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
