import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsServicecatalogServiceActionArgsDefinition {
  assume_role?: string;
  name: string;
  parameters?: string;
  type?: string;
  version: string;
}

export interface AwsServicecatalogServiceActionArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}

export interface AwsServicecatalogServiceActionArgs {
  accept_language?: string;
  name: string;
  definition: AwsServicecatalogServiceActionArgsDefinition;
  timeouts?: AwsServicecatalogServiceActionArgsTimeouts;
}

export class aws_servicecatalog_service_action extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsServicecatalogServiceActionArgs) {
    const meta = {definition:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_servicecatalog_service_action", resourceName);
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
}
