import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsElasticacheParameterGroupArgsParameter {
  name: string;
  value: string;
}

export interface AwsElasticacheParameterGroupArgs {
  description?: string;
  family: string;
  name: string;
  tags?: { [key: string]: string };
  parameter?: AwsElasticacheParameterGroupArgsParameter[];
}

export class aws_elasticache_parameter_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsElasticacheParameterGroupArgs) {
    const meta = {parameter:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_elasticache_parameter_group", resourceName);
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

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
