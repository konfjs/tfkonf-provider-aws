import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDatazoneAssetTypeArgsFormsInput {
  map_block_key: string;
  required?: boolean;
  type_identifier: string;
  type_revision: string;
}

export interface AwsDatazoneAssetTypeArgsTimeouts {
  create?: string;
}

export interface AwsDatazoneAssetTypeArgs {
  description?: string;
  domain_identifier: string;
  name: string;
  owning_project_identifier: string;
  forms_input?: AwsDatazoneAssetTypeArgsFormsInput[];
  timeouts?: AwsDatazoneAssetTypeArgsTimeouts;
}

export class aws_datazone_asset_type extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDatazoneAssetTypeArgs) {
    const meta = {forms_input:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_datazone_asset_type", resourceName);
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

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get owning_project_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.owning_project_identifier`;
  }

  get revision(): string {
    return `${this.resourceType}.${this.resourceName}.revision`;
  }
}
