import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsServicecatalogPortfolioShareArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}

export interface AwsServicecatalogPortfolioShareArgs {
  accept_language?: string;
  portfolio_id: string;
  principal_id: string;
  share_principals?: boolean;
  share_tag_options?: boolean;
  type: string;
  wait_for_acceptance?: boolean;
  timeouts?: AwsServicecatalogPortfolioShareArgsTimeouts;
}

export class aws_servicecatalog_portfolio_share extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsServicecatalogPortfolioShareArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_servicecatalog_portfolio_share", resourceName);
  }

  get accepted(): string {
    return `${this.resourceType}.${this.resourceName}.accepted`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get portfolio_id(): string {
    return `${this.resourceType}.${this.resourceName}.portfolio_id`;
  }

  get principal_id(): string {
    return `${this.resourceType}.${this.resourceName}.principal_id`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
