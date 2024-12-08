import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppintegrationsEventIntegrationArgsEventFilter {
  source: string;
}

export interface AwsAppintegrationsEventIntegrationArgs {
  description?: string;
  eventbridge_bus: string;
  name: string;
  tags?: { [key: string]: string };
  event_filter: AwsAppintegrationsEventIntegrationArgsEventFilter;
}

export class aws_appintegrations_event_integration extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsAppintegrationsEventIntegrationArgs) {
    const meta = {event_filter:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_appintegrations_event_integration", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get eventbridge_bus(): string {
    return `${this.resourceType}.${this.resourceName}.eventbridge_bus`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
