import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlueWorkflowArgs {
  default_run_properties?: { [key: string]: string };
  description?: string;
  max_concurrent_runs?: number;
  name?: string;
  tags?: { [key: string]: string };
}

export class aws_glue_workflow extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsGlueWorkflowArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_glue_workflow", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
