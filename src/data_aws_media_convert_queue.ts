import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsMediaConvertQueueArgs {
  id: string;
}

export class data_aws_media_convert_queue extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsMediaConvertQueueArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_media_convert_queue", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
