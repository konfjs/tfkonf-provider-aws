import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsServicecatalogProvisioningArtifactsArgsTimeouts {
  read?: string;
}

export interface DataAwsServicecatalogProvisioningArtifactsArgs {
  accept_language?: string;
  product_id: string;
  timeouts?: DataAwsServicecatalogProvisioningArtifactsArgsTimeouts;
}

export class data_aws_servicecatalog_provisioning_artifacts extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsServicecatalogProvisioningArtifactsArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_servicecatalog_provisioning_artifacts", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get product_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.product_id`;
  }

  get provisioning_artifact_details(): string {
    return `data.${this.resourceType}.${this.resourceName}.provisioning_artifact_details`;
  }
}
