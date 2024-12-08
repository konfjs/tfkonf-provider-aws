import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsElasticBeanstalkApplicationArgsAppversionLifecycle {
  delete_source_from_s3?: boolean;
  max_age_in_days?: number;
  max_count?: number;
  service_role: string;
}

export interface AwsElasticBeanstalkApplicationArgs {
  description?: string;
  name: string;
  tags?: { [key: string]: string };
  appversion_lifecycle?: AwsElasticBeanstalkApplicationArgsAppversionLifecycle;
}

export class aws_elastic_beanstalk_application extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsElasticBeanstalkApplicationArgs) {
    const meta = {appversion_lifecycle:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_elastic_beanstalk_application", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
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
