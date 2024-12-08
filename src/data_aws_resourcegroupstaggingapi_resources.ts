import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsResourcegroupstaggingapiResourcesArgsTagFilter {
  key: string;
  values?: string[];
}

export interface DataAwsResourcegroupstaggingapiResourcesArgs {
  exclude_compliant_resources?: boolean;
  include_compliance_details?: boolean;
  resource_arn_list?: string[];
  resource_type_filters?: string[];
  tag_filter?: DataAwsResourcegroupstaggingapiResourcesArgsTagFilter[];
}

export class data_aws_resourcegroupstaggingapi_resources extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsResourcegroupstaggingapiResourcesArgs) {
    const meta = {tag_filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_resourcegroupstaggingapi_resources", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get resource_tag_mapping_list(): string {
    return `data.${this.resourceType}.${this.resourceName}.resource_tag_mapping_list`;
  }
}
