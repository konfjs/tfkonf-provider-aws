import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOamSinkArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsOamSinkArgs {
  name: string;
  tags?: { [key: string]: string };
  timeouts?: AwsOamSinkArgsTimeouts;
}

export class aws_oam_sink extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsOamSinkArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_oam_sink", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get sink_id(): string {
    return `${this.resourceType}.${this.resourceName}.sink_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
