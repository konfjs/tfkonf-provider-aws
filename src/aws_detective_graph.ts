import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDetectiveGraphArgs {
  tags?: { [key: string]: string };
}

export class aws_detective_graph extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDetectiveGraphArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_detective_graph", resourceName);
  }

  get created_time(): string {
    return `${this.resourceType}.${this.resourceName}.created_time`;
  }

  get graph_arn(): string {
    return `${this.resourceType}.${this.resourceName}.graph_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
