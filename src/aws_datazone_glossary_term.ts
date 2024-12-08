import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDatazoneGlossaryTermArgsTermRelations {
  classifies?: string[];
  is_a?: string[];
}

export interface AwsDatazoneGlossaryTermArgsTimeouts {
  create?: string;
}

export interface AwsDatazoneGlossaryTermArgs {
  domain_identifier?: string;
  glossary_identifier: string;
  long_description?: string;
  name: string;
  short_description?: string;
  status?: string;
  term_relations?: AwsDatazoneGlossaryTermArgsTermRelations[];
  timeouts?: AwsDatazoneGlossaryTermArgsTimeouts;
}

export class aws_datazone_glossary_term extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDatazoneGlossaryTermArgs) {
    const meta = {term_relations:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_datazone_glossary_term", resourceName);
  }

  get created_at(): string {
    return `${this.resourceType}.${this.resourceName}.created_at`;
  }

  get created_by(): string {
    return `${this.resourceType}.${this.resourceName}.created_by`;
  }

  get glossary_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.glossary_identifier`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
