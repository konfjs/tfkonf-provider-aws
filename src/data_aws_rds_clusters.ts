import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRdsClustersArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsRdsClustersArgs {
  filter?: DataAwsRdsClustersArgsFilter[];
}

export class data_aws_rds_clusters extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsRdsClustersArgs) {
    const meta = {filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_rds_clusters", resourceName);
  }

  get cluster_arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_arns`;
  }

  get cluster_identifiers(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_identifiers`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
