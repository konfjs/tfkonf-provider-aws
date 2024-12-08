import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsAppintegrationsEventIntegrationArgs {
  name: string;
}

export class data_aws_appintegrations_event_integration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsAppintegrationsEventIntegrationArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_appintegrations_event_integration", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get event_filter(): string {
    return `data.${this.resourceType}.${this.resourceName}.event_filter`;
  }

  get eventbridge_bus(): string {
    return `data.${this.resourceType}.${this.resourceName}.eventbridge_bus`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
