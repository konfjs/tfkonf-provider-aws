import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDatazoneGlossaryArgs {
  description?: string;
  domain_identifier: string;
  name: string;
  owning_project_identifier: string;
  status?: string;
}

export class aws_datazone_glossary extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDatazoneGlossaryArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_datazone_glossary", resourceName);
  }

  get domain_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.domain_identifier`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get owning_project_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.owning_project_identifier`;
  }
}
