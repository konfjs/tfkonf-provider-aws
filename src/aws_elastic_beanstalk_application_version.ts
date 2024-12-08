import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsElasticBeanstalkApplicationVersionArgs {
  application: string;
  bucket: string;
  description?: string;
  force_delete?: boolean;
  key: string;
  name: string;
  process?: boolean;
  tags?: { [key: string]: string };
}

export class aws_elastic_beanstalk_application_version extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsElasticBeanstalkApplicationVersionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_elastic_beanstalk_application_version", resourceName);
  }

  get application(): string {
    return `${this.resourceType}.${this.resourceName}.application`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key(): string {
    return `${this.resourceType}.${this.resourceName}.key`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
