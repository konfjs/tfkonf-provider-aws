import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEksNodeGroupsArgs {
  cluster_name: string;
}

export class data_aws_eks_node_groups extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEksNodeGroupsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_eks_node_groups", resourceName);
  }

  get cluster_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_name`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get names(): string {
    return `data.${this.resourceType}.${this.resourceName}.names`;
  }
}
