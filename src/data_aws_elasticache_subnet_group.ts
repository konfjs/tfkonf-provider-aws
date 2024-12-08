import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsElasticacheSubnetGroupArgs {
  name: string;
  tags?: { [key: string]: string };
}

export class data_aws_elasticache_subnet_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsElasticacheSubnetGroupArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_elasticache_subnet_group", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get subnet_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnet_ids`;
  }

  get vpc_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
