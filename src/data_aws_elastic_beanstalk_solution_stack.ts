import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsElasticBeanstalkSolutionStackArgs {
  most_recent?: boolean;
  name_regex: string;
}

export class data_aws_elastic_beanstalk_solution_stack extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsElasticBeanstalkSolutionStackArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_elastic_beanstalk_solution_stack", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get name_regex(): string {
    return `data.${this.resourceType}.${this.resourceName}.name_regex`;
  }
}
