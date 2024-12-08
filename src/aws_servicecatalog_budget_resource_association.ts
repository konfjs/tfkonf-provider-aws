import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsServicecatalogBudgetResourceAssociationArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
}

export interface AwsServicecatalogBudgetResourceAssociationArgs {
  budget_name: string;
  resource_id: string;
  timeouts?: AwsServicecatalogBudgetResourceAssociationArgsTimeouts;
}

export class aws_servicecatalog_budget_resource_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsServicecatalogBudgetResourceAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_servicecatalog_budget_resource_association", resourceName);
  }

  get budget_name(): string {
    return `${this.resourceType}.${this.resourceName}.budget_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get resource_id(): string {
    return `${this.resourceType}.${this.resourceName}.resource_id`;
  }
}
