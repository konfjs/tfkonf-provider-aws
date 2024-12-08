import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSagemakerNotebookInstanceLifecycleConfigurationArgs {
  name?: string;
  on_create?: string;
  on_start?: string;
}

export class aws_sagemaker_notebook_instance_lifecycle_configuration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSagemakerNotebookInstanceLifecycleConfigurationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_sagemaker_notebook_instance_lifecycle_configuration", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
