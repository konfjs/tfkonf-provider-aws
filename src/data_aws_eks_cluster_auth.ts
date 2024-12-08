import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEksClusterAuthArgs {
  name: string;
}

export class data_aws_eks_cluster_auth extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEksClusterAuthArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_eks_cluster_auth", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get token(): string {
    return `data.${this.resourceType}.${this.resourceName}.token`;
  }
}
