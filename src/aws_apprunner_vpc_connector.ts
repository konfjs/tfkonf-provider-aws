import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApprunnerVpcConnectorArgs {
  security_groups: string[];
  subnets: string[];
  tags?: { [key: string]: string };
  vpc_connector_name: string;
}

export class aws_apprunner_vpc_connector extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsApprunnerVpcConnectorArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_apprunner_vpc_connector", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get security_groups(): string {
    return `${this.resourceType}.${this.resourceName}.security_groups`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get subnets(): string {
    return `${this.resourceType}.${this.resourceName}.subnets`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vpc_connector_name(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_connector_name`;
  }

  get vpc_connector_revision(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_connector_revision`;
  }
}
