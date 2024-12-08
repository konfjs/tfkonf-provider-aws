import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsServicecatalogPortfolioArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}

export interface AwsServicecatalogPortfolioArgs {
  name: string;
  provider_name: string;
  tags?: { [key: string]: string };
  timeouts?: AwsServicecatalogPortfolioArgsTimeouts;
}

export class aws_servicecatalog_portfolio extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsServicecatalogPortfolioArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_servicecatalog_portfolio", resourceName);
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

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get provider_name(): string {
    return `${this.resourceType}.${this.resourceName}.provider_name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
