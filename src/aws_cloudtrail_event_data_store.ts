import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudtrailEventDataStoreArgsAdvancedEventSelectorFieldSelector {
}

export interface AwsCloudtrailEventDataStoreArgsAdvancedEventSelector {
  field_selector?: AwsCloudtrailEventDataStoreArgsAdvancedEventSelectorFieldSelector[];
}

export interface AwsCloudtrailEventDataStoreArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsCloudtrailEventDataStoreArgs {
  billing_mode?: string;
  kms_key_id?: string;
  multi_region_enabled?: boolean;
  name: string;
  organization_enabled?: boolean;
  retention_period?: number;
  tags?: { [key: string]: string };
  termination_protection_enabled?: boolean;
  advanced_event_selector?: AwsCloudtrailEventDataStoreArgsAdvancedEventSelector[];
  timeouts?: AwsCloudtrailEventDataStoreArgsTimeouts;
}

export class aws_cloudtrail_event_data_store extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCloudtrailEventDataStoreArgs) {
    const meta = {advanced_event_selector:{isBlock:true,field_selector:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_cloudtrail_event_data_store", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
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
