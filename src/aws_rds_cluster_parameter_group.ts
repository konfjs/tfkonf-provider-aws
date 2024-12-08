import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRdsClusterParameterGroupArgsParameter {
  apply_method?: string;
  name: string;
  value: string;
}

export interface AwsRdsClusterParameterGroupArgs {
  description?: string;
  family: string;
  tags?: { [key: string]: string };
  parameter?: AwsRdsClusterParameterGroupArgsParameter[];
}

export class aws_rds_cluster_parameter_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRdsClusterParameterGroupArgs) {
    const meta = {parameter:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_rds_cluster_parameter_group", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get family(): string {
    return `${this.resourceType}.${this.resourceName}.family`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
