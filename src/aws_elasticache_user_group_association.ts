import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsElasticacheUserGroupAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsElasticacheUserGroupAssociationArgs {
  user_group_id: string;
  user_id: string;
  timeouts?: AwsElasticacheUserGroupAssociationArgsTimeouts;
}

export class aws_elasticache_user_group_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsElasticacheUserGroupAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_elasticache_user_group_association", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get user_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.user_group_id`;
  }

  get user_id(): string {
    return `${this.resourceType}.${this.resourceName}.user_id`;
  }
}
