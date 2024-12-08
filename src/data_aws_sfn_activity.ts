import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSfnActivityArgs {
}

export class data_aws_sfn_activity extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsSfnActivityArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_sfn_activity", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get creation_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.creation_date`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }
}
