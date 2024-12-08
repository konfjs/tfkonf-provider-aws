import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsElasticBeanstalkEnvironmentArgsSetting {
  name: string;
  namespace: string;
  resource?: string;
  value: string;
}

export interface AwsElasticBeanstalkEnvironmentArgs {
  application: string;
  description?: string;
  name: string;
  poll_interval?: string;
  tags?: { [key: string]: string };
  template_name?: string;
  tier?: string;
  wait_for_ready_timeout?: string;
  setting?: AwsElasticBeanstalkEnvironmentArgsSetting[];
}

export class aws_elastic_beanstalk_environment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsElasticBeanstalkEnvironmentArgs) {
    const meta = {setting:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_elastic_beanstalk_environment", resourceName);
  }

  get all_settings(): string {
    return `${this.resourceType}.${this.resourceName}.all_settings`;
  }

  get application(): string {
    return `${this.resourceType}.${this.resourceName}.application`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get autoscaling_groups(): string {
    return `${this.resourceType}.${this.resourceName}.autoscaling_groups`;
  }

  get cname(): string {
    return `${this.resourceType}.${this.resourceName}.cname`;
  }

  get cname_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.cname_prefix`;
  }

  get endpoint_url(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint_url`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instances(): string {
    return `${this.resourceType}.${this.resourceName}.instances`;
  }

  get launch_configurations(): string {
    return `${this.resourceType}.${this.resourceName}.launch_configurations`;
  }

  get load_balancers(): string {
    return `${this.resourceType}.${this.resourceName}.load_balancers`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get platform_arn(): string {
    return `${this.resourceType}.${this.resourceName}.platform_arn`;
  }

  get queues(): string {
    return `${this.resourceType}.${this.resourceName}.queues`;
  }

  get solution_stack_name(): string {
    return `${this.resourceType}.${this.resourceName}.solution_stack_name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get triggers(): string {
    return `${this.resourceType}.${this.resourceName}.triggers`;
  }

  get version_label(): string {
    return `${this.resourceType}.${this.resourceName}.version_label`;
  }
}
