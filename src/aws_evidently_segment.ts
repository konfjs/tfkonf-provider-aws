import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEvidentlySegmentArgs {
  description?: string;
  name: string;
  pattern: string;
  tags?: { [key: string]: string };
}

export class aws_evidently_segment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEvidentlySegmentArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_evidently_segment", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_time(): string {
    return `${this.resourceType}.${this.resourceName}.created_time`;
  }

  get experiment_count(): string {
    return `${this.resourceType}.${this.resourceName}.experiment_count`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_updated_time(): string {
    return `${this.resourceType}.${this.resourceName}.last_updated_time`;
  }

  get launch_count(): string {
    return `${this.resourceType}.${this.resourceName}.launch_count`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get pattern(): string {
    return `${this.resourceType}.${this.resourceName}.pattern`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
