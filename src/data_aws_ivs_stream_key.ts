import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsIvsStreamKeyArgs {
  channel_arn: string;
}

export class data_aws_ivs_stream_key extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsIvsStreamKeyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_ivs_stream_key", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get channel_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.channel_arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get value(): string {
    return `data.${this.resourceType}.${this.resourceName}.value`;
  }
}
