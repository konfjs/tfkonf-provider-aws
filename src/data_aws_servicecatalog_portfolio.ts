import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsServicecatalogPortfolioArgsTimeouts {
  read?: string;
}

export interface DataAwsServicecatalogPortfolioArgs {
  accept_language?: string;
  id: string;
  timeouts?: DataAwsServicecatalogPortfolioArgsTimeouts;
}

export class data_aws_servicecatalog_portfolio extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsServicecatalogPortfolioArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_servicecatalog_portfolio", resourceName);
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

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get provider_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.provider_name`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
