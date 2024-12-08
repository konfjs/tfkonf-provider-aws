import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsImagebuilderImagePipelineArgsImageScanningConfigurationEcrConfiguration {
  container_tags?: string[];
  repository_name?: string;
}

export interface AwsImagebuilderImagePipelineArgsImageScanningConfiguration {
  image_scanning_enabled?: boolean;
  ecr_configuration?: AwsImagebuilderImagePipelineArgsImageScanningConfigurationEcrConfiguration;
}

export interface AwsImagebuilderImagePipelineArgsImageTestsConfiguration {
  image_tests_enabled?: boolean;
  timeout_minutes?: number;
}

export interface AwsImagebuilderImagePipelineArgsSchedule {
  pipeline_execution_start_condition?: string;
  schedule_expression: string;
}

export interface AwsImagebuilderImagePipelineArgsWorkflowParameter {
  name: string;
  value: string;
}

export interface AwsImagebuilderImagePipelineArgsWorkflow {
  on_failure?: string;
  parallel_group?: string;
  workflow_arn: string;
  parameter?: AwsImagebuilderImagePipelineArgsWorkflowParameter[];
}

export interface AwsImagebuilderImagePipelineArgs {
  container_recipe_arn?: string;
  description?: string;
  distribution_configuration_arn?: string;
  enhanced_image_metadata_enabled?: boolean;
  execution_role?: string;
  image_recipe_arn?: string;
  infrastructure_configuration_arn: string;
  name: string;
  status?: string;
  tags?: { [key: string]: string };
  image_scanning_configuration?: AwsImagebuilderImagePipelineArgsImageScanningConfiguration;
  image_tests_configuration?: AwsImagebuilderImagePipelineArgsImageTestsConfiguration;
  schedule?: AwsImagebuilderImagePipelineArgsSchedule;
  workflow?: AwsImagebuilderImagePipelineArgsWorkflow[];
}

export class aws_imagebuilder_image_pipeline extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsImagebuilderImagePipelineArgs) {
    const meta = {image_scanning_configuration:{isBlock:true,ecr_configuration:{isBlock:true}},image_tests_configuration:{isBlock:true},schedule:{isBlock:true},workflow:{isBlock:true,parameter:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_imagebuilder_image_pipeline", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get date_created(): string {
    return `${this.resourceType}.${this.resourceName}.date_created`;
  }

  get date_last_run(): string {
    return `${this.resourceType}.${this.resourceName}.date_last_run`;
  }

  get date_next_run(): string {
    return `${this.resourceType}.${this.resourceName}.date_next_run`;
  }

  get date_updated(): string {
    return `${this.resourceType}.${this.resourceName}.date_updated`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get infrastructure_configuration_arn(): string {
    return `${this.resourceType}.${this.resourceName}.infrastructure_configuration_arn`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get platform(): string {
    return `${this.resourceType}.${this.resourceName}.platform`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
