import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSagemakerProjectArgsServiceCatalogProvisioningDetailsProvisioningParameter {
  key: string;
  value?: string;
}

export interface AwsSagemakerProjectArgsServiceCatalogProvisioningDetails {
  path_id?: string;
  product_id: string;
  provisioning_parameter?: AwsSagemakerProjectArgsServiceCatalogProvisioningDetailsProvisioningParameter[];
}

export interface AwsSagemakerProjectArgs {
  project_description?: string;
  project_name: string;
  tags?: { [key: string]: string };
  service_catalog_provisioning_details: AwsSagemakerProjectArgsServiceCatalogProvisioningDetails;
}

export class aws_sagemaker_project extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSagemakerProjectArgs) {
    const meta = {service_catalog_provisioning_details:{isBlock:true,provisioning_parameter:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_sagemaker_project", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get project_id(): string {
    return `${this.resourceType}.${this.resourceName}.project_id`;
  }

  get project_name(): string {
    return `${this.resourceType}.${this.resourceName}.project_name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
