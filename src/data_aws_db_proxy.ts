import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsDbProxyArgs {
  name: string;
}

export class data_aws_db_proxy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsDbProxyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_db_proxy", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get auth(): string {
    return `data.${this.resourceType}.${this.resourceName}.auth`;
  }

  get debug_logging(): string {
    return `data.${this.resourceType}.${this.resourceName}.debug_logging`;
  }

  get endpoint(): string {
    return `data.${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get engine_family(): string {
    return `data.${this.resourceType}.${this.resourceName}.engine_family`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get idle_client_timeout(): string {
    return `data.${this.resourceType}.${this.resourceName}.idle_client_timeout`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get require_tls(): string {
    return `data.${this.resourceType}.${this.resourceName}.require_tls`;
  }

  get role_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get vpc_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_id`;
  }

  get vpc_security_group_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_security_group_ids`;
  }

  get vpc_subnet_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_subnet_ids`;
  }
}
