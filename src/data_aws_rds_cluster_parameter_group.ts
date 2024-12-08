import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRdsClusterParameterGroupArgs {
  name: string;
}

export class data_aws_rds_cluster_parameter_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsRdsClusterParameterGroupArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_rds_cluster_parameter_group", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get family(): string {
    return `data.${this.resourceType}.${this.resourceName}.family`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }
}
