import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDbProxyTargetArgs {
  db_cluster_identifier?: string;
  db_instance_identifier?: string;
  db_proxy_name: string;
  target_group_name: string;
}

export class aws_db_proxy_target extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDbProxyTargetArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_db_proxy_target", resourceName);
  }

  get db_proxy_name(): string {
    return `${this.resourceType}.${this.resourceName}.db_proxy_name`;
  }

  get endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get port(): string {
    return `${this.resourceType}.${this.resourceName}.port`;
  }

  get rds_resource_id(): string {
    return `${this.resourceType}.${this.resourceName}.rds_resource_id`;
  }

  get target_arn(): string {
    return `${this.resourceType}.${this.resourceName}.target_arn`;
  }

  get target_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.target_group_name`;
  }

  get tracked_cluster_id(): string {
    return `${this.resourceType}.${this.resourceName}.tracked_cluster_id`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
