import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDatazoneProjectArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsDatazoneProjectArgs {
  description?: string;
  domain_identifier: string;
  glossary_terms?: string[];
  name: string;
  skip_deletion_check?: boolean;
  timeouts?: AwsDatazoneProjectArgsTimeouts;
}

export class aws_datazone_project extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDatazoneProjectArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_datazone_project", resourceName);
  }

  get created_at(): string {
    return `${this.resourceType}.${this.resourceName}.created_at`;
  }

  get created_by(): string {
    return `${this.resourceType}.${this.resourceName}.created_by`;
  }

  get domain_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.domain_identifier`;
  }

  get failure_reasons(): string {
    return `${this.resourceType}.${this.resourceName}.failure_reasons`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_updated_at(): string {
    return `${this.resourceType}.${this.resourceName}.last_updated_at`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project_status(): string {
    return `${this.resourceType}.${this.resourceName}.project_status`;
  }
}
