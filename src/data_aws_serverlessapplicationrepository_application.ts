import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsServerlessapplicationrepositoryApplicationArgs {
  application_id: string;
}

export class data_aws_serverlessapplicationrepository_application extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsServerlessapplicationrepositoryApplicationArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_serverlessapplicationrepository_application", resourceName);
  }

  get application_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.application_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get required_capabilities(): string {
    return `data.${this.resourceType}.${this.resourceName}.required_capabilities`;
  }

  get semantic_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.semantic_version`;
  }

  get source_code_url(): string {
    return `data.${this.resourceType}.${this.resourceName}.source_code_url`;
  }

  get template_url(): string {
    return `data.${this.resourceType}.${this.resourceName}.template_url`;
  }
}
