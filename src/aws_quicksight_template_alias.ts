import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsQuicksightTemplateAliasArgs {
  alias_name: string;
  template_id: string;
  template_version_number: number;
}

export class aws_quicksight_template_alias extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsQuicksightTemplateAliasArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_quicksight_template_alias", resourceName);
  }

  get alias_name(): string {
    return `${this.resourceType}.${this.resourceName}.alias_name`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get aws_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.aws_account_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get template_id(): string {
    return `${this.resourceType}.${this.resourceName}.template_id`;
  }

  get template_version_number(): string {
    return `${this.resourceType}.${this.resourceName}.template_version_number`;
  }
}
