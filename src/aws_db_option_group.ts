import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDbOptionGroupArgsOptionOptionSettings {
  name: string;
  value: string;
}

export interface AwsDbOptionGroupArgsOption {
  db_security_group_memberships?: string[];
  option_name: string;
  port?: number;
  version?: string;
  vpc_security_group_memberships?: string[];
  option_settings?: AwsDbOptionGroupArgsOptionOptionSettings[];
}

export interface AwsDbOptionGroupArgsTimeouts {
  delete?: string;
}

export interface AwsDbOptionGroupArgs {
  engine_name: string;
  major_engine_version: string;
  option_group_description?: string;
  skip_destroy?: boolean;
  tags?: { [key: string]: string };
  option?: AwsDbOptionGroupArgsOption[];
  timeouts?: AwsDbOptionGroupArgsTimeouts;
}

export class aws_db_option_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDbOptionGroupArgs) {
    const meta = {option:{isBlock:true,option_settings:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_db_option_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get engine_name(): string {
    return `${this.resourceType}.${this.resourceName}.engine_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get major_engine_version(): string {
    return `${this.resourceType}.${this.resourceName}.major_engine_version`;
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
