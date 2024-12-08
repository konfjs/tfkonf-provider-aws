import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApprunnerDeploymentArgsTimeouts {
  create?: string;
}

export interface AwsApprunnerDeploymentArgs {
  service_arn: string;
  timeouts?: AwsApprunnerDeploymentArgsTimeouts;
}

export class aws_apprunner_deployment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsApprunnerDeploymentArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_apprunner_deployment", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get operation_id(): string {
    return `${this.resourceType}.${this.resourceName}.operation_id`;
  }

  get service_arn(): string {
    return `${this.resourceType}.${this.resourceName}.service_arn`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }
}
