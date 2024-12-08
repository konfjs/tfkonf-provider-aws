import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsElasticacheReservedCacheNodeOfferingArgs {
  cache_node_type: string;
  duration: string;
  offering_type: string;
  product_description: string;
}

export class data_aws_elasticache_reserved_cache_node_offering extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsElasticacheReservedCacheNodeOfferingArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_elasticache_reserved_cache_node_offering", resourceName);
  }

  get cache_node_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.cache_node_type`;
  }

  get duration(): string {
    return `data.${this.resourceType}.${this.resourceName}.duration`;
  }

  get fixed_price(): string {
    return `data.${this.resourceType}.${this.resourceName}.fixed_price`;
  }

  get offering_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.offering_id`;
  }

  get offering_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.offering_type`;
  }

  get product_description(): string {
    return `data.${this.resourceType}.${this.resourceName}.product_description`;
  }
}
