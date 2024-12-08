import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCodecommitTriggerArgsTrigger {
  branches?: string[];
  custom_data?: string;
  destination_arn: string;
  events: string[];
  name: string;
}

export interface AwsCodecommitTriggerArgs {
  repository_name: string;
  trigger: AwsCodecommitTriggerArgsTrigger[];
}

export class aws_codecommit_trigger extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCodecommitTriggerArgs) {
    const meta = {trigger:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_codecommit_trigger", resourceName);
  }

  get configuration_id(): string {
    return `${this.resourceType}.${this.resourceName}.configuration_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get repository_name(): string {
    return `${this.resourceType}.${this.resourceName}.repository_name`;
  }
}
