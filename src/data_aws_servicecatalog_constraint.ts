import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsServicecatalogConstraintArgsTimeouts {
  read?: string;
}

export interface DataAwsServicecatalogConstraintArgs {
  accept_language?: string;
  id: string;
  timeouts?: DataAwsServicecatalogConstraintArgsTimeouts;
}

export class data_aws_servicecatalog_constraint extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsServicecatalogConstraintArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_servicecatalog_constraint", resourceName);
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get owner(): string {
    return `data.${this.resourceType}.${this.resourceName}.owner`;
  }

  get parameters(): string {
    return `data.${this.resourceType}.${this.resourceName}.parameters`;
  }

  get portfolio_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.portfolio_id`;
  }

  get product_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.product_id`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }
}
