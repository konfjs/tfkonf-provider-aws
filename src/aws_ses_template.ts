import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSesTemplateArgs {
  html?: string;
  name: string;
  subject?: string;
  text?: string;
}

export class aws_ses_template extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSesTemplateArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ses_template", resourceName);
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
