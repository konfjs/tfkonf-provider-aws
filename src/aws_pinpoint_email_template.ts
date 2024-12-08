import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsPinpointEmailTemplateArgsEmailTemplateHeader {
  name?: string;
  value?: string;
}

export interface AwsPinpointEmailTemplateArgsEmailTemplate {
  default_substitutions?: string;
  description?: string;
  html_part?: string;
  recommender_id?: string;
  subject?: string;
  text_part?: string;
  header?: AwsPinpointEmailTemplateArgsEmailTemplateHeader[];
}

export interface AwsPinpointEmailTemplateArgs {
  tags?: { [key: string]: string };
  template_name: string;
  email_template?: AwsPinpointEmailTemplateArgsEmailTemplate[];
}

export class aws_pinpoint_email_template extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsPinpointEmailTemplateArgs) {
    const meta = {email_template:{isBlock:true,header:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_pinpoint_email_template", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get template_name(): string {
    return `${this.resourceType}.${this.resourceName}.template_name`;
  }
}
