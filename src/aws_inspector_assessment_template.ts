import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsInspectorAssessmentTemplateArgsEventSubscription {
  event: string;
  topic_arn: string;
}

export interface AwsInspectorAssessmentTemplateArgs {
  duration: number;
  name: string;
  rules_package_arns: string[];
  tags?: { [key: string]: string };
  target_arn: string;
  event_subscription?: AwsInspectorAssessmentTemplateArgsEventSubscription[];
}

export class aws_inspector_assessment_template extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsInspectorAssessmentTemplateArgs) {
    const meta = {event_subscription:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_inspector_assessment_template", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get duration(): string {
    return `${this.resourceType}.${this.resourceName}.duration`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get rules_package_arns(): string {
    return `${this.resourceType}.${this.resourceName}.rules_package_arns`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get target_arn(): string {
    return `${this.resourceType}.${this.resourceName}.target_arn`;
  }
}
