import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsmcontactsContactArgs {
  alias: string;
  display_name?: string;
  tags?: { [key: string]: string };
  type: string;
}

export class aws_ssmcontacts_contact extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSsmcontactsContactArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ssmcontacts_contact", resourceName);
  }

  get alias(): string {
    return `${this.resourceType}.${this.resourceName}.alias`;
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

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
