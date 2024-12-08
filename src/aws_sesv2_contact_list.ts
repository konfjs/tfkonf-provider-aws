import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSesv2ContactListArgsTopic {
  default_subscription_status: string;
  description?: string;
  display_name: string;
  topic_name: string;
}

export interface AwsSesv2ContactListArgs {
  contact_list_name: string;
  description?: string;
  tags?: { [key: string]: string };
  topic?: AwsSesv2ContactListArgsTopic[];
}

export class aws_sesv2_contact_list extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSesv2ContactListArgs) {
    const meta = {topic:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_sesv2_contact_list", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get contact_list_name(): string {
    return `${this.resourceType}.${this.resourceName}.contact_list_name`;
  }

  get created_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.created_timestamp`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_updated_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.last_updated_timestamp`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
