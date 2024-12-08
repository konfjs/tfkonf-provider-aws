import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsQuicksightGroupArgs {
  description?: string;
  group_name: string;
  namespace?: string;
}

export class aws_quicksight_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsQuicksightGroupArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_quicksight_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get aws_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.aws_account_id`;
  }

  get group_name(): string {
    return `${this.resourceType}.${this.resourceName}.group_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
