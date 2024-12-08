import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDbProxyEndpointArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsDbProxyEndpointArgs {
  db_proxy_endpoint_name: string;
  db_proxy_name: string;
  tags?: { [key: string]: string };
  target_role?: string;
  vpc_subnet_ids: string[];
  timeouts?: AwsDbProxyEndpointArgsTimeouts;
}

export class aws_db_proxy_endpoint extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDbProxyEndpointArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_db_proxy_endpoint", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get db_proxy_endpoint_name(): string {
    return `${this.resourceType}.${this.resourceName}.db_proxy_endpoint_name`;
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

  get is_default(): string {
    return `${this.resourceType}.${this.resourceName}.is_default`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }

  get vpc_security_group_ids(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_security_group_ids`;
  }

  get vpc_subnet_ids(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_subnet_ids`;
  }
}
