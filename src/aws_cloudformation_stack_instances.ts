import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudformationStackInstancesArgsDeploymentTargets {
  account_filter_type?: string;
  accounts?: string[];
  accounts_url?: string;
  organizational_unit_ids?: string[];
}

export interface AwsCloudformationStackInstancesArgsOperationPreferences {
  concurrency_mode?: string;
  failure_tolerance_count?: number;
  failure_tolerance_percentage?: number;
  max_concurrent_count?: number;
  max_concurrent_percentage?: number;
  region_concurrency_type?: string;
  region_order?: string[];
}

export interface AwsCloudformationStackInstancesArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsCloudformationStackInstancesArgs {
  call_as?: string;
  parameter_overrides?: { [key: string]: string };
  retain_stacks?: boolean;
  stack_set_name: string;
  deployment_targets?: AwsCloudformationStackInstancesArgsDeploymentTargets;
  operation_preferences?: AwsCloudformationStackInstancesArgsOperationPreferences;
  timeouts?: AwsCloudformationStackInstancesArgsTimeouts;
}

export class aws_cloudformation_stack_instances extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCloudformationStackInstancesArgs) {
    const meta = {deployment_targets:{isBlock:true},operation_preferences:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_cloudformation_stack_instances", resourceName);
  }

  get accounts(): string {
    return `${this.resourceType}.${this.resourceName}.accounts`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get regions(): string {
    return `${this.resourceType}.${this.resourceName}.regions`;
  }

  get stack_instance_summaries(): string {
    return `${this.resourceType}.${this.resourceName}.stack_instance_summaries`;
  }

  get stack_set_id(): string {
    return `${this.resourceType}.${this.resourceName}.stack_set_id`;
  }

  get stack_set_name(): string {
    return `${this.resourceType}.${this.resourceName}.stack_set_name`;
  }
}
