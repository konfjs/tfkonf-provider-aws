import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMemorydbUserArgsAuthenticationMode {
  passwords?: string[];
  type: string;
}

export interface AwsMemorydbUserArgs {
  access_string: string;
  tags?: { [key: string]: string };
  user_name: string;
  authentication_mode: AwsMemorydbUserArgsAuthenticationMode;
}

export class aws_memorydb_user extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsMemorydbUserArgs) {
    const meta = {authentication_mode:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_memorydb_user", resourceName);
  }

  get access_string(): string {
    return `${this.resourceType}.${this.resourceName}.access_string`;
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

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get user_name(): string {
    return `${this.resourceType}.${this.resourceName}.user_name`;
  }
}
