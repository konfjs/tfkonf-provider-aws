import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsConnectUserArgs {
  instance_id: string;
}

export class data_aws_connect_user extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsConnectUserArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_connect_user", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get directory_user_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.directory_user_id`;
  }

  get hierarchy_group_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.hierarchy_group_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get identity_info(): string {
    return `data.${this.resourceType}.${this.resourceName}.identity_info`;
  }

  get instance_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get phone_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.phone_config`;
  }

  get routing_profile_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.routing_profile_id`;
  }

  get security_profile_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_profile_ids`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get user_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_id`;
  }
}
