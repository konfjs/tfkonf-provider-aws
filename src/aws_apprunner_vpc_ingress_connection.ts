import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApprunnerVpcIngressConnectionArgsIngressVpcConfiguration {
  vpc_endpoint_id?: string;
  vpc_id?: string;
}

export interface AwsApprunnerVpcIngressConnectionArgs {
  name: string;
  service_arn: string;
  tags?: { [key: string]: string };
  ingress_vpc_configuration: AwsApprunnerVpcIngressConnectionArgsIngressVpcConfiguration;
}

export class aws_apprunner_vpc_ingress_connection extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsApprunnerVpcIngressConnectionArgs) {
    const meta = {ingress_vpc_configuration:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_apprunner_vpc_ingress_connection", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get service_arn(): string {
    return `${this.resourceType}.${this.resourceName}.service_arn`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
