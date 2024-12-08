import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsElasticacheReservedCacheNodeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsElasticacheReservedCacheNodeArgs {
  reserved_cache_nodes_offering_id: string;
  tags?: { [key: string]: string };
  timeouts?: AwsElasticacheReservedCacheNodeArgsTimeouts;
}

export class aws_elasticache_reserved_cache_node extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsElasticacheReservedCacheNodeArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_elasticache_reserved_cache_node", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get cache_node_count(): string {
    return `${this.resourceType}.${this.resourceName}.cache_node_count`;
  }

  get cache_node_type(): string {
    return `${this.resourceType}.${this.resourceName}.cache_node_type`;
  }

  get duration(): string {
    return `${this.resourceType}.${this.resourceName}.duration`;
  }

  get fixed_price(): string {
    return `${this.resourceType}.${this.resourceName}.fixed_price`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get offering_type(): string {
    return `${this.resourceType}.${this.resourceName}.offering_type`;
  }

  get product_description(): string {
    return `${this.resourceType}.${this.resourceName}.product_description`;
  }

  get recurring_charges(): string {
    return `${this.resourceType}.${this.resourceName}.recurring_charges`;
  }

  get reserved_cache_nodes_offering_id(): string {
    return `${this.resourceType}.${this.resourceName}.reserved_cache_nodes_offering_id`;
  }

  get start_time(): string {
    return `${this.resourceType}.${this.resourceName}.start_time`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get usage_price(): string {
    return `${this.resourceType}.${this.resourceName}.usage_price`;
  }
}
