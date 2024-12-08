import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsImagebuilderImageArgsImageScanningConfigurationEcrConfiguration {
  container_tags?: string[];
  repository_name?: string;
}

export interface AwsImagebuilderImageArgsImageScanningConfiguration {
  image_scanning_enabled?: boolean;
  ecr_configuration?: AwsImagebuilderImageArgsImageScanningConfigurationEcrConfiguration;
}

export interface AwsImagebuilderImageArgsImageTestsConfiguration {
  image_tests_enabled?: boolean;
  timeout_minutes?: number;
}

export interface AwsImagebuilderImageArgsTimeouts {
  create?: string;
}

export interface AwsImagebuilderImageArgsWorkflowParameter {
  name: string;
  value: string;
}

export interface AwsImagebuilderImageArgsWorkflow {
  on_failure?: string;
  parallel_group?: string;
  workflow_arn: string;
  parameter?: AwsImagebuilderImageArgsWorkflowParameter[];
}

export interface AwsImagebuilderImageArgs {
  container_recipe_arn?: string;
  distribution_configuration_arn?: string;
  enhanced_image_metadata_enabled?: boolean;
  image_recipe_arn?: string;
  infrastructure_configuration_arn: string;
  tags?: { [key: string]: string };
  image_scanning_configuration?: AwsImagebuilderImageArgsImageScanningConfiguration;
  image_tests_configuration?: AwsImagebuilderImageArgsImageTestsConfiguration;
  timeouts?: AwsImagebuilderImageArgsTimeouts;
  workflow?: AwsImagebuilderImageArgsWorkflow[];
}

export class aws_imagebuilder_image extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsImagebuilderImageArgs) {
    const meta = {image_scanning_configuration:{isBlock:true,ecr_configuration:{isBlock:true}},image_tests_configuration:{isBlock:true},timeouts:{isBlock:true},workflow:{isBlock:true,parameter:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_imagebuilder_image", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get date_created(): string {
    return `${this.resourceType}.${this.resourceName}.date_created`;
  }

  get execution_role(): string {
    return `${this.resourceType}.${this.resourceName}.execution_role`;
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

  get os_version(): string {
    return `${this.resourceType}.${this.resourceName}.os_version`;
  }

  get output_resources(): string {
    return `${this.resourceType}.${this.resourceName}.output_resources`;
  }

  get platform(): string {
    return `${this.resourceType}.${this.resourceName}.platform`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
