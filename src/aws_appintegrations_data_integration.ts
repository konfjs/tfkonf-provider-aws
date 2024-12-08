import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppintegrationsDataIntegrationArgsScheduleConfig {
  first_execution_from: string;
  object: string;
  schedule_expression: string;
}

export interface AwsAppintegrationsDataIntegrationArgs {
  description?: string;
  kms_key: string;
  name: string;
  source_uri: string;
  tags?: { [key: string]: string };
  schedule_config: AwsAppintegrationsDataIntegrationArgsScheduleConfig;
}

export class aws_appintegrations_data_integration extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAppintegrationsDataIntegrationArgs) {
    const meta = {schedule_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_appintegrations_data_integration", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get source_uri(): string {
    return `${this.resourceType}.${this.resourceName}.source_uri`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
