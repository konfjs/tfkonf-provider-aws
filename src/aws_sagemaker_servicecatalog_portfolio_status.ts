import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSagemakerServicecatalogPortfolioStatusArgs {
  status: string;
}

export class aws_sagemaker_servicecatalog_portfolio_status extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSagemakerServicecatalogPortfolioStatusArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_sagemaker_servicecatalog_portfolio_status", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }
}