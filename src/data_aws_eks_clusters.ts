import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEksClustersArgs {
}

export class data_aws_eks_clusters extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEksClustersArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_eks_clusters", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get names(): string {
    return `data.${this.resourceType}.${this.resourceName}.names`;
  }
}