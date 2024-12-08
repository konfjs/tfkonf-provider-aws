import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIotThingGroupMembershipArgs {
  override_dynamic_group?: boolean;
  thing_group_name: string;
  thing_name: string;
}

export class aws_iot_thing_group_membership extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsIotThingGroupMembershipArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iot_thing_group_membership", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get thing_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.thing_group_name`;
  }

  get thing_name(): string {
    return `${this.resourceType}.${this.resourceName}.thing_name`;
  }
}
