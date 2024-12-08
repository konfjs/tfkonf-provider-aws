import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEcsAccountSettingDefaultArgs {
  name: string;
  value: string;
}

export class aws_ecs_account_setting_default extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEcsAccountSettingDefaultArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ecs_account_setting_default", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get principal_arn(): string {
    return `${this.resourceType}.${this.resourceName}.principal_arn`;
  }

  get value(): string {
    return `${this.resourceType}.${this.resourceName}.value`;
  }
}
