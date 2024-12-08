import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMqConfigurationArgs {
  data: string;
  description?: string;
  engine_type: string;
  engine_version: string;
  name: string;
  tags?: { [key: string]: string };
}

export class aws_mq_configuration extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsMqConfigurationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_mq_configuration", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get authentication_strategy(): string {
    return `${this.resourceType}.${this.resourceName}.authentication_strategy`;
  }

  get data(): string {
    return `${this.resourceType}.${this.resourceName}.data`;
  }

  get engine_type(): string {
    return `${this.resourceType}.${this.resourceName}.engine_type`;
  }

  get engine_version(): string {
    return `${this.resourceType}.${this.resourceName}.engine_version`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get latest_revision(): string {
    return `${this.resourceType}.${this.resourceName}.latest_revision`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
