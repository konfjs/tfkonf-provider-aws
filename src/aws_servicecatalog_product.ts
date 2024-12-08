import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsServicecatalogProductArgsProvisioningArtifactParameters {
  description?: string;
  disable_template_validation?: boolean;
  name?: string;
  template_physical_id?: string;
  template_url?: string;
  type?: string;
}

export interface AwsServicecatalogProductArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}

export interface AwsServicecatalogProductArgs {
  accept_language?: string;
  name: string;
  owner: string;
  tags?: { [key: string]: string };
  type: string;
  provisioning_artifact_parameters: AwsServicecatalogProductArgsProvisioningArtifactParameters;
  timeouts?: AwsServicecatalogProductArgsTimeouts;
}

export class aws_servicecatalog_product extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsServicecatalogProductArgs) {
    const meta = {provisioning_artifact_parameters:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_servicecatalog_product", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_time(): string {
    return `${this.resourceType}.${this.resourceName}.created_time`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get distributor(): string {
    return `${this.resourceType}.${this.resourceName}.distributor`;
  }

  get has_default_path(): string {
    return `${this.resourceType}.${this.resourceName}.has_default_path`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get owner(): string {
    return `${this.resourceType}.${this.resourceName}.owner`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get support_description(): string {
    return `${this.resourceType}.${this.resourceName}.support_description`;
  }

  get support_email(): string {
    return `${this.resourceType}.${this.resourceName}.support_email`;
  }

  get support_url(): string {
    return `${this.resourceType}.${this.resourceName}.support_url`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
