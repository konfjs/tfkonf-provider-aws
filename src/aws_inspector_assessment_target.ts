import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsInspectorAssessmentTargetArgs {
  name: string;
  resource_group_arn?: string;
}

export class aws_inspector_assessment_target extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsInspectorAssessmentTargetArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_inspector_assessment_target", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
