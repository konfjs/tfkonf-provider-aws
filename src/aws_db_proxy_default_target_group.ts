import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDbProxyDefaultTargetGroupArgsConnectionPoolConfig {
  connection_borrow_timeout?: number;
  init_query?: string;
  max_connections_percent?: number;
  max_idle_connections_percent?: number;
  session_pinning_filters?: string[];
}

export interface AwsDbProxyDefaultTargetGroupArgsTimeouts {
  create?: string;
  update?: string;
}

export interface AwsDbProxyDefaultTargetGroupArgs {
  db_proxy_name: string;
  connection_pool_config?: AwsDbProxyDefaultTargetGroupArgsConnectionPoolConfig;
  timeouts?: AwsDbProxyDefaultTargetGroupArgsTimeouts;
}

export class aws_db_proxy_default_target_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDbProxyDefaultTargetGroupArgs) {
    const meta = {connection_pool_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_db_proxy_default_target_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get db_proxy_name(): string {
    return `${this.resourceType}.${this.resourceName}.db_proxy_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
