import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsMemorydbUserArgs {
  user_name: string;
}

export class data_aws_memorydb_user extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsMemorydbUserArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_memorydb_user", resourceName);
  }

  get access_string(): string {
    return `data.${this.resourceType}.${this.resourceName}.access_string`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get authentication_mode(): string {
    return `data.${this.resourceType}.${this.resourceName}.authentication_mode`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get minimum_engine_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.minimum_engine_version`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get user_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_name`;
  }
}
