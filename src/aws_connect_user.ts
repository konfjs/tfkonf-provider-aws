import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConnectUserArgsIdentityInfo {
  email?: string;
  first_name?: string;
  last_name?: string;
}

export interface AwsConnectUserArgsPhoneConfig {
  after_contact_work_time_limit?: number;
  auto_accept?: boolean;
  desk_phone_number?: string;
  phone_type: string;
}

export interface AwsConnectUserArgs {
  hierarchy_group_id?: string;
  instance_id: string;
  name: string;
  password?: string;
  routing_profile_id: string;
  security_profile_ids: string[];
  tags?: { [key: string]: string };
  identity_info?: AwsConnectUserArgsIdentityInfo;
  phone_config: AwsConnectUserArgsPhoneConfig;
}

export class aws_connect_user extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsConnectUserArgs) {
    const meta = {identity_info:{isBlock:true},phone_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_connect_user", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get directory_user_id(): string {
    return `${this.resourceType}.${this.resourceName}.directory_user_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get routing_profile_id(): string {
    return `${this.resourceType}.${this.resourceName}.routing_profile_id`;
  }

  get security_profile_ids(): string {
    return `${this.resourceType}.${this.resourceName}.security_profile_ids`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get user_id(): string {
    return `${this.resourceType}.${this.resourceName}.user_id`;
  }
}
