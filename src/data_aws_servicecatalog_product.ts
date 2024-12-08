import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsServicecatalogProductArgsTimeouts {
  read?: string;
}

export interface DataAwsServicecatalogProductArgs {
  accept_language?: string;
  id: string;
  timeouts?: DataAwsServicecatalogProductArgsTimeouts;
}

export class data_aws_servicecatalog_product extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsServicecatalogProductArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_servicecatalog_product", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_time`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get distributor(): string {
    return `data.${this.resourceType}.${this.resourceName}.distributor`;
  }

  get has_default_path(): string {
    return `data.${this.resourceType}.${this.resourceName}.has_default_path`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get owner(): string {
    return `data.${this.resourceType}.${this.resourceName}.owner`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get support_description(): string {
    return `data.${this.resourceType}.${this.resourceName}.support_description`;
  }

  get support_email(): string {
    return `data.${this.resourceType}.${this.resourceName}.support_email`;
  }

  get support_url(): string {
    return `data.${this.resourceType}.${this.resourceName}.support_url`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }
}
