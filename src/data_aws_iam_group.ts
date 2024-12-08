import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsIamGroupArgs {
  group_name: string;
}

export class data_aws_iam_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsIamGroupArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_iam_group", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get group_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.group_id`;
  }

  get group_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.group_name`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get path(): string {
    return `data.${this.resourceType}.${this.resourceName}.path`;
  }

  get users(): string {
    return `data.${this.resourceType}.${this.resourceName}.users`;
  }
}
