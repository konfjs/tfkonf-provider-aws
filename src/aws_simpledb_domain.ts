import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSimpledbDomainArgs {
  name: string;
}

export class aws_simpledb_domain extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSimpledbDomainArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_simpledb_domain", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
