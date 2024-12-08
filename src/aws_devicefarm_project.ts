import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDevicefarmProjectArgs {
  default_job_timeout_minutes?: number;
  name: string;
  tags?: { [key: string]: string };
}

export class aws_devicefarm_project extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDevicefarmProjectArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_devicefarm_project", resourceName);
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

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
