import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsPricingProductArgsFilters {
  field: string;
  value: string;
}

export interface DataAwsPricingProductArgs {
  service_code: string;
  filters: DataAwsPricingProductArgsFilters[];
}

export class data_aws_pricing_product extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsPricingProductArgs) {
    const meta = {filters:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_pricing_product", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get result(): string {
    return `data.${this.resourceType}.${this.resourceName}.result`;
  }

  get service_code(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_code`;
  }
}
