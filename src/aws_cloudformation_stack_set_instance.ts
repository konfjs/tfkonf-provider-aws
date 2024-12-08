import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudformationStackSetInstanceArgsDeploymentTargets {
  account_filter_type?: string;
  accounts?: string[];
  accounts_url?: string;
  organizational_unit_ids?: string[];
}

export interface AwsCloudformationStackSetInstanceArgsOperationPreferences {
  concurrency_mode?: string;
  failure_tolerance_count?: number;
  failure_tolerance_percentage?: number;
  max_concurrent_count?: number;
  max_concurrent_percentage?: number;
  region_concurrency_type?: string;
  region_order?: string[];
}

export interface AwsCloudformationStackSetInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsCloudformationStackSetInstanceArgs {
  call_as?: string;
  parameter_overrides?: { [key: string]: string };
  retain_stack?: boolean;
  stack_set_name: string;
  deployment_targets?: AwsCloudformationStackSetInstanceArgsDeploymentTargets;
  operation_preferences?: AwsCloudformationStackSetInstanceArgsOperationPreferences;
  timeouts?: AwsCloudformationStackSetInstanceArgsTimeouts;
}

export class aws_cloudformation_stack_set_instance extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCloudformationStackSetInstanceArgs) {
    const meta = {deployment_targets:{isBlock:true},operation_preferences:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_cloudformation_stack_set_instance", resourceName);
  }

  get account_id(): string {
    return `${this.resourceType}.${this.resourceName}.account_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get organizational_unit_id(): string {
    return `${this.resourceType}.${this.resourceName}.organizational_unit_id`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get stack_id(): string {
    return `${this.resourceType}.${this.resourceName}.stack_id`;
  }

  get stack_instance_summaries(): string {
    return `${this.resourceType}.${this.resourceName}.stack_instance_summaries`;
  }

  get stack_set_name(): string {
    return `${this.resourceType}.${this.resourceName}.stack_set_name`;
  }
}
