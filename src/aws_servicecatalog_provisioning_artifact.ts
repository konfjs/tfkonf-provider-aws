import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsServicecatalogProvisioningArtifactArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}

export interface AwsServicecatalogProvisioningArtifactArgs {
  accept_language?: string;
  active?: boolean;
  disable_template_validation?: boolean;
  guidance?: string;
  product_id: string;
  template_physical_id?: string;
  template_url?: string;
  type?: string;
  timeouts?: AwsServicecatalogProvisioningArtifactArgsTimeouts;
}

export class aws_servicecatalog_provisioning_artifact extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsServicecatalogProvisioningArtifactArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_servicecatalog_provisioning_artifact", resourceName);
  }

  get created_time(): string {
    return `${this.resourceType}.${this.resourceName}.created_time`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get product_id(): string {
    return `${this.resourceType}.${this.resourceName}.product_id`;
  }

  get provisioning_artifact_id(): string {
    return `${this.resourceType}.${this.resourceName}.provisioning_artifact_id`;
  }
}
