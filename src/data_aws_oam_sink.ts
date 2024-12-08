import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsOamSinkArgs {
  sink_identifier: string;
}

export class data_aws_oam_sink extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsOamSinkArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_oam_sink", resourceName);
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

  get sink_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.sink_id`;
  }

  get sink_identifier(): string {
    return `data.${this.resourceType}.${this.resourceName}.sink_identifier`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
