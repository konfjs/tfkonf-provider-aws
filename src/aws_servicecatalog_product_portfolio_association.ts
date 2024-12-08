import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsServicecatalogProductPortfolioAssociationArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
}

export interface AwsServicecatalogProductPortfolioAssociationArgs {
  accept_language?: string;
  portfolio_id: string;
  product_id: string;
  source_portfolio_id?: string;
  timeouts?: AwsServicecatalogProductPortfolioAssociationArgsTimeouts;
}

export class aws_servicecatalog_product_portfolio_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsServicecatalogProductPortfolioAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_servicecatalog_product_portfolio_association", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get portfolio_id(): string {
    return `${this.resourceType}.${this.resourceName}.portfolio_id`;
  }

  get product_id(): string {
    return `${this.resourceType}.${this.resourceName}.product_id`;
  }
}
