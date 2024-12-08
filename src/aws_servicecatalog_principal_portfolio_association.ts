import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsServicecatalogPrincipalPortfolioAssociationArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
}

export interface AwsServicecatalogPrincipalPortfolioAssociationArgs {
  accept_language?: string;
  portfolio_id: string;
  principal_arn: string;
  principal_type?: string;
  timeouts?: AwsServicecatalogPrincipalPortfolioAssociationArgsTimeouts;
}

export class aws_servicecatalog_principal_portfolio_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsServicecatalogPrincipalPortfolioAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_servicecatalog_principal_portfolio_association", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get portfolio_id(): string {
    return `${this.resourceType}.${this.resourceName}.portfolio_id`;
  }

  get principal_arn(): string {
    return `${this.resourceType}.${this.resourceName}.principal_arn`;
  }
}
