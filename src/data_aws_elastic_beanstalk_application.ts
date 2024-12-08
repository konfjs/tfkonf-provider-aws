import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsElasticBeanstalkApplicationArgs {
  name: string;
}

export class data_aws_elastic_beanstalk_application extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsElasticBeanstalkApplicationArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_elastic_beanstalk_application", resourceName);
  }

  get appversion_lifecycle(): string {
    return `data.${this.resourceType}.${this.resourceName}.appversion_lifecycle`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }
}
