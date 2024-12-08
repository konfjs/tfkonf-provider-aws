import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCodedeployAppArgs {
  compute_platform?: string;
  name: string;
  tags?: { [key: string]: string };
}

export class aws_codedeploy_app extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCodedeployAppArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_codedeploy_app", resourceName);
  }

  get application_id(): string {
    return `${this.resourceType}.${this.resourceName}.application_id`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get github_account_name(): string {
    return `${this.resourceType}.${this.resourceName}.github_account_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get linked_to_github(): string {
    return `${this.resourceType}.${this.resourceName}.linked_to_github`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
