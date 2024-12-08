import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsResourceexplorer2ViewArgsFilters {
  filter_string: string;
}

export interface AwsResourceexplorer2ViewArgsIncludedProperty {
  name: string;
}

export interface AwsResourceexplorer2ViewArgs {
  name: string;
  tags?: { [key: string]: string };
  filters?: AwsResourceexplorer2ViewArgsFilters[];
  included_property?: AwsResourceexplorer2ViewArgsIncludedProperty[];
}

export class aws_resourceexplorer2_view extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsResourceexplorer2ViewArgs) {
    const meta = {filters:{isBlock:true},included_property:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_resourceexplorer2_view", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get default_view(): string {
    return `${this.resourceType}.${this.resourceName}.default_view`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get scope(): string {
    return `${this.resourceType}.${this.resourceName}.scope`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
