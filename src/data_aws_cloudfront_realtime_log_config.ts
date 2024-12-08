import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCloudfrontRealtimeLogConfigArgs {
  name: string;
}

export class data_aws_cloudfront_realtime_log_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsCloudfrontRealtimeLogConfigArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_cloudfront_realtime_log_config", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get endpoint(): string {
    return `data.${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get fields(): string {
    return `data.${this.resourceType}.${this.resourceName}.fields`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get sampling_rate(): string {
    return `data.${this.resourceType}.${this.resourceName}.sampling_rate`;
  }
}
