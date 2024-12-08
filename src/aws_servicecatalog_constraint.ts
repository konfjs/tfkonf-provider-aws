import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsServicecatalogConstraintArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}

export interface AwsServicecatalogConstraintArgs {
  accept_language?: string;
  parameters: string;
  portfolio_id: string;
  product_id: string;
  type: string;
  timeouts?: AwsServicecatalogConstraintArgsTimeouts;
}

export class aws_servicecatalog_constraint extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsServicecatalogConstraintArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_servicecatalog_constraint", resourceName);
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get owner(): string {
    return `${this.resourceType}.${this.resourceName}.owner`;
  }

  get parameters(): string {
    return `${this.resourceType}.${this.resourceName}.parameters`;
  }

  get portfolio_id(): string {
    return `${this.resourceType}.${this.resourceName}.portfolio_id`;
  }

  get product_id(): string {
    return `${this.resourceType}.${this.resourceName}.product_id`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
