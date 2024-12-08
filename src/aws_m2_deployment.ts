import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsM2DeploymentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsM2DeploymentArgs {
  application_id: string;
  application_version: number;
  environment_id: string;
  force_stop?: boolean;
  start: boolean;
  timeouts?: AwsM2DeploymentArgsTimeouts;
}

export class aws_m2_deployment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsM2DeploymentArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_m2_deployment", resourceName);
  }

  get application_id(): string {
    return `${this.resourceType}.${this.resourceName}.application_id`;
  }

  get application_version(): string {
    return `${this.resourceType}.${this.resourceName}.application_version`;
  }

  get deployment_id(): string {
    return `${this.resourceType}.${this.resourceName}.deployment_id`;
  }

  get environment_id(): string {
    return `${this.resourceType}.${this.resourceName}.environment_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get start(): string {
    return `${this.resourceType}.${this.resourceName}.start`;
  }
}
