import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsMemorydbAclArgs {
  name: string;
}

export class data_aws_memorydb_acl extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsMemorydbAclArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_memorydb_acl", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get minimum_engine_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.minimum_engine_version`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get user_names(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_names`;
  }
}
