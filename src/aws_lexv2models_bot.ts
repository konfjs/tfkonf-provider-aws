import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLexv2modelsBotArgsDataPrivacy {
  child_directed: boolean;
}

export interface AwsLexv2modelsBotArgsMembers {
  alias_id: string;
  alias_name: string;
  id: string;
  name: string;
  version: string;
}

export interface AwsLexv2modelsBotArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsLexv2modelsBotArgs {
  description?: string;
  idle_session_ttl_in_seconds: number;
  name: string;
  role_arn: string;
  tags?: { [key: string]: string };
  test_bot_alias_tags?: { [key: string]: string };
  data_privacy?: AwsLexv2modelsBotArgsDataPrivacy[];
  members?: AwsLexv2modelsBotArgsMembers[];
  timeouts?: AwsLexv2modelsBotArgsTimeouts;
}

export class aws_lexv2models_bot extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsLexv2modelsBotArgs) {
    const meta = {data_privacy:{isBlock:true},members:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_lexv2models_bot", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get idle_session_ttl_in_seconds(): string {
    return `${this.resourceType}.${this.resourceName}.idle_session_ttl_in_seconds`;
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

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
