import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMacie2CustomDataIdentifierArgs {
  description?: string;
  ignore_words?: string[];
  keywords?: string[];
  regex?: string;
  tags?: { [key: string]: string };
}

export class aws_macie2_custom_data_identifier extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsMacie2CustomDataIdentifierArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_macie2_custom_data_identifier", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_at(): string {
    return `${this.resourceType}.${this.resourceName}.created_at`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get maximum_match_distance(): string {
    return `${this.resourceType}.${this.resourceName}.maximum_match_distance`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
