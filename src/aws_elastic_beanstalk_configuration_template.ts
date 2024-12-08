import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsElasticBeanstalkConfigurationTemplateArgsSetting {
  name: string;
  namespace: string;
  resource?: string;
  value: string;
}

export interface AwsElasticBeanstalkConfigurationTemplateArgs {
  application: string;
  description?: string;
  environment_id?: string;
  name: string;
  solution_stack_name?: string;
  setting?: AwsElasticBeanstalkConfigurationTemplateArgsSetting[];
}

export class aws_elastic_beanstalk_configuration_template extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsElasticBeanstalkConfigurationTemplateArgs) {
    const meta = {setting:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_elastic_beanstalk_configuration_template", resourceName);
  }

  get application(): string {
    return `${this.resourceType}.${this.resourceName}.application`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
