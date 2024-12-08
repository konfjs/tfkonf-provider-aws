import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsServicecatalogPortfolioConstraintsArgsTimeouts {
  read?: string;
}

export interface DataAwsServicecatalogPortfolioConstraintsArgs {
  accept_language?: string;
  portfolio_id: string;
  product_id?: string;
  timeouts?: DataAwsServicecatalogPortfolioConstraintsArgsTimeouts;
}

export class data_aws_servicecatalog_portfolio_constraints extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsServicecatalogPortfolioConstraintsArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_servicecatalog_portfolio_constraints", resourceName);
  }

  get details(): string {
    return `data.${this.resourceType}.${this.resourceName}.details`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get portfolio_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.portfolio_id`;
  }
}
