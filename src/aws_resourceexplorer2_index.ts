import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsResourceexplorer2IndexArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsResourceexplorer2IndexArgs {
  tags?: { [key: string]: string };
  type: string;
  timeouts?: AwsResourceexplorer2IndexArgsTimeouts;
}

export class aws_resourceexplorer2_index extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsResourceexplorer2IndexArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_resourceexplorer2_index", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
