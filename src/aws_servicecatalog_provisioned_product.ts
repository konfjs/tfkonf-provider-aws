import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsServicecatalogProvisionedProductArgsProvisioningParameters {
  key: string;
  use_previous_value?: boolean;
  value?: string;
}

export interface AwsServicecatalogProvisionedProductArgsStackSetProvisioningPreferences {
  accounts?: string[];
  failure_tolerance_count?: number;
  failure_tolerance_percentage?: number;
  max_concurrency_count?: number;
  max_concurrency_percentage?: number;
  regions?: string[];
}

export interface AwsServicecatalogProvisionedProductArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}

export interface AwsServicecatalogProvisionedProductArgs {
  accept_language?: string;
  ignore_errors?: boolean;
  name: string;
  notification_arns?: string[];
  path_name?: string;
  product_name?: string;
  provisioning_artifact_name?: string;
  retain_physical_resources?: boolean;
  tags?: { [key: string]: string };
  provisioning_parameters?: AwsServicecatalogProvisionedProductArgsProvisioningParameters[];
  stack_set_provisioning_preferences?: AwsServicecatalogProvisionedProductArgsStackSetProvisioningPreferences;
  timeouts?: AwsServicecatalogProvisionedProductArgsTimeouts;
}

export class aws_servicecatalog_provisioned_product extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsServicecatalogProvisionedProductArgs) {
    const meta = {provisioning_parameters:{isBlock:true},stack_set_provisioning_preferences:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_servicecatalog_provisioned_product", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get cloudwatch_dashboard_names(): string {
    return `${this.resourceType}.${this.resourceName}.cloudwatch_dashboard_names`;
  }

  get created_time(): string {
    return `${this.resourceType}.${this.resourceName}.created_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_provisioning_record_id(): string {
    return `${this.resourceType}.${this.resourceName}.last_provisioning_record_id`;
  }

  get last_record_id(): string {
    return `${this.resourceType}.${this.resourceName}.last_record_id`;
  }

  get last_successful_provisioning_record_id(): string {
    return `${this.resourceType}.${this.resourceName}.last_successful_provisioning_record_id`;
  }

  get launch_role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.launch_role_arn`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get outputs(): string {
    return `${this.resourceType}.${this.resourceName}.outputs`;
  }

  get path_id(): string {
    return `${this.resourceType}.${this.resourceName}.path_id`;
  }

  get product_id(): string {
    return `${this.resourceType}.${this.resourceName}.product_id`;
  }

  get provisioning_artifact_id(): string {
    return `${this.resourceType}.${this.resourceName}.provisioning_artifact_id`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get status_message(): string {
    return `${this.resourceType}.${this.resourceName}.status_message`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
