import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMemorydbAclArgs {
  tags?: { [key: string]: string };
  user_names?: string[];
}

export class aws_memorydb_acl extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsMemorydbAclArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_memorydb_acl", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get minimum_engine_version(): string {
    return `${this.resourceType}.${this.resourceName}.minimum_engine_version`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
