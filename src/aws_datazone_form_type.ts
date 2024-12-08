import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDatazoneFormTypeArgsModel {
  smithy: string;
}

export interface AwsDatazoneFormTypeArgsTimeouts {
  create?: string;
}

export interface AwsDatazoneFormTypeArgs {
  description?: string;
  domain_identifier: string;
  name: string;
  owning_project_identifier: string;
  model?: AwsDatazoneFormTypeArgsModel[];
  timeouts?: AwsDatazoneFormTypeArgsTimeouts;
}

export class aws_datazone_form_type extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDatazoneFormTypeArgs) {
    const meta = {model:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_datazone_form_type", resourceName);
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

  get imports(): string {
    return `${this.resourceType}.${this.resourceName}.imports`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get origin_domain_id(): string {
    return `${this.resourceType}.${this.resourceName}.origin_domain_id`;
  }

  get origin_project_id(): string {
    return `${this.resourceType}.${this.resourceName}.origin_project_id`;
  }

  get owning_project_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.owning_project_identifier`;
  }

  get revision(): string {
    return `${this.resourceType}.${this.resourceName}.revision`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }
}
