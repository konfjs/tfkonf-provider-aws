import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsElasticBeanstalkHostedZoneArgs {
  region?: string;
}

export class data_aws_elastic_beanstalk_hosted_zone extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsElasticBeanstalkHostedZoneArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_elastic_beanstalk_hosted_zone", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
