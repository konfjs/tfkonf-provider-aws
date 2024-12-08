import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDbProxyArgsAuth {
  auth_scheme?: string;
  description?: string;
  iam_auth?: string;
  secret_arn?: string;
  username?: string;
}

export interface AwsDbProxyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsDbProxyArgs {
  debug_logging?: boolean;
  engine_family: string;
  name: string;
  require_tls?: boolean;
  role_arn: string;
  tags?: { [key: string]: string };
  vpc_subnet_ids: string[];
  auth: AwsDbProxyArgsAuth[];
  timeouts?: AwsDbProxyArgsTimeouts;
}

export class aws_db_proxy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDbProxyArgs) {
    const meta = {auth:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_db_proxy", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get engine_family(): string {
    return `${this.resourceType}.${this.resourceName}.engine_family`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get idle_client_timeout(): string {
    return `${this.resourceType}.${this.resourceName}.idle_client_timeout`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vpc_security_group_ids(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_security_group_ids`;
  }

  get vpc_subnet_ids(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_subnet_ids`;
  }
}
