import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsServerlessapplicationrepositoryCloudformationStackArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsServerlessapplicationrepositoryCloudformationStackArgs {
  application_id: string;
  capabilities: string[];
  name: string;
  tags?: { [key: string]: string };
  timeouts?: AwsServerlessapplicationrepositoryCloudformationStackArgsTimeouts;
}

export class aws_serverlessapplicationrepository_cloudformation_stack extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsServerlessapplicationrepositoryCloudformationStackArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_serverlessapplicationrepository_cloudformation_stack", resourceName);
  }

  get application_id(): string {
    return `${this.resourceType}.${this.resourceName}.application_id`;
  }

  get capabilities(): string {
    return `${this.resourceType}.${this.resourceName}.capabilities`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get outputs(): string {
    return `${this.resourceType}.${this.resourceName}.outputs`;
  }

  get parameters(): string {
    return `${this.resourceType}.${this.resourceName}.parameters`;
  }

  get semantic_version(): string {
    return `${this.resourceType}.${this.resourceName}.semantic_version`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
