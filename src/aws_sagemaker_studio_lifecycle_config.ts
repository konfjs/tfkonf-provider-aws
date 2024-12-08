import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSagemakerStudioLifecycleConfigArgs {
  studio_lifecycle_config_app_type: string;
  studio_lifecycle_config_content: string;
  studio_lifecycle_config_name: string;
  tags?: { [key: string]: string };
}

export class aws_sagemaker_studio_lifecycle_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSagemakerStudioLifecycleConfigArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_sagemaker_studio_lifecycle_config", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get studio_lifecycle_config_app_type(): string {
    return `${this.resourceType}.${this.resourceName}.studio_lifecycle_config_app_type`;
  }

  get studio_lifecycle_config_content(): string {
    return `${this.resourceType}.${this.resourceName}.studio_lifecycle_config_content`;
  }

  get studio_lifecycle_config_name(): string {
    return `${this.resourceType}.${this.resourceName}.studio_lifecycle_config_name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
