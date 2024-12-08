import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsElasticacheSubnetGroupArgs {
  description?: string;
  name: string;
  subnet_ids: string[];
  tags?: { [key: string]: string };
}

export class aws_elasticache_subnet_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsElasticacheSubnetGroupArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_elasticache_subnet_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get subnet_ids(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_ids`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
