import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDbSubnetGroupArgs {
  description?: string;
  subnet_ids: string[];
  tags?: { [key: string]: string };
}

export class aws_db_subnet_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDbSubnetGroupArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_db_subnet_group", resourceName);
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

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get subnet_ids(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_ids`;
  }

  get supported_network_types(): string {
    return `${this.resourceType}.${this.resourceName}.supported_network_types`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
