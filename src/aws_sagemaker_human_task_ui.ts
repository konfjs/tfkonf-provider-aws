import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSagemakerHumanTaskUiArgsUiTemplate {
  content?: string;
}

export interface AwsSagemakerHumanTaskUiArgs {
  human_task_ui_name: string;
  tags?: { [key: string]: string };
  ui_template: AwsSagemakerHumanTaskUiArgsUiTemplate;
}

export class aws_sagemaker_human_task_ui extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSagemakerHumanTaskUiArgs) {
    const meta = {ui_template:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_sagemaker_human_task_ui", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get human_task_ui_name(): string {
    return `${this.resourceType}.${this.resourceName}.human_task_ui_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
