import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsQuicksightGroupArgs {
  group_name: string;
  namespace?: string;
}

export class data_aws_quicksight_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsQuicksightGroupArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_quicksight_group", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get aws_account_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.aws_account_id`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get group_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.group_name`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get principal_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.principal_id`;
  }
}
