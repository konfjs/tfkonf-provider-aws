import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSsmincidentsResponsePlanArgs {
  arn: string;
}

export class data_aws_ssmincidents_response_plan extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsSsmincidentsResponsePlanArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_ssmincidents_response_plan", resourceName);
  }

  get action(): string {
    return `data.${this.resourceType}.${this.resourceName}.action`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get chat_channel(): string {
    return `data.${this.resourceType}.${this.resourceName}.chat_channel`;
  }

  get display_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.display_name`;
  }

  get engagements(): string {
    return `data.${this.resourceType}.${this.resourceName}.engagements`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get incident_template(): string {
    return `data.${this.resourceType}.${this.resourceName}.incident_template`;
  }

  get integration(): string {
    return `data.${this.resourceType}.${this.resourceName}.integration`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
