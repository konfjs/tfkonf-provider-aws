import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsServicecatalogTagOptionResourceAssociationArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
}

export interface AwsServicecatalogTagOptionResourceAssociationArgs {
  resource_id: string;
  tag_option_id: string;
  timeouts?: AwsServicecatalogTagOptionResourceAssociationArgsTimeouts;
}

export class aws_servicecatalog_tag_option_resource_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsServicecatalogTagOptionResourceAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_servicecatalog_tag_option_resource_association", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get resource_arn(): string {
    return `${this.resourceType}.${this.resourceName}.resource_arn`;
  }

  get resource_created_time(): string {
    return `${this.resourceType}.${this.resourceName}.resource_created_time`;
  }

  get resource_description(): string {
    return `${this.resourceType}.${this.resourceName}.resource_description`;
  }

  get resource_id(): string {
    return `${this.resourceType}.${this.resourceName}.resource_id`;
  }

  get resource_name(): string {
    return `${this.resourceType}.${this.resourceName}.resource_name`;
  }

  get tag_option_id(): string {
    return `${this.resourceType}.${this.resourceName}.tag_option_id`;
  }
}
