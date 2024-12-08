import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsElasticacheUserGroupArgs {
  engine: string;
  tags?: { [key: string]: string };
  user_group_id: string;
  user_ids?: string[];
}

export class aws_elasticache_user_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsElasticacheUserGroupArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_elasticache_user_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get engine(): string {
    return `${this.resourceType}.${this.resourceName}.engine`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get user_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.user_group_id`;
  }
}
