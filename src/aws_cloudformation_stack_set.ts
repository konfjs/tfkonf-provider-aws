import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudformationStackSetArgsAutoDeployment {
  enabled?: boolean;
  retain_stacks_on_account_removal?: boolean;
}

export interface AwsCloudformationStackSetArgsManagedExecution {
  active?: boolean;
}

export interface AwsCloudformationStackSetArgsOperationPreferences {
  failure_tolerance_count?: number;
  failure_tolerance_percentage?: number;
  max_concurrent_count?: number;
  max_concurrent_percentage?: number;
  region_concurrency_type?: string;
  region_order?: string[];
}

export interface AwsCloudformationStackSetArgsTimeouts {
  update?: string;
}

export interface AwsCloudformationStackSetArgs {
  administration_role_arn?: string;
  call_as?: string;
  capabilities?: string[];
  description?: string;
  name: string;
  parameters?: { [key: string]: string };
  permission_model?: string;
  tags?: { [key: string]: string };
  template_url?: string;
  auto_deployment?: AwsCloudformationStackSetArgsAutoDeployment;
  managed_execution?: AwsCloudformationStackSetArgsManagedExecution;
  operation_preferences?: AwsCloudformationStackSetArgsOperationPreferences;
  timeouts?: AwsCloudformationStackSetArgsTimeouts;
}

export class aws_cloudformation_stack_set extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsCloudformationStackSetArgs) {
    const meta = {auto_deployment:{isBlock:true},managed_execution:{isBlock:true},operation_preferences:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_cloudformation_stack_set", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get execution_role_name(): string {
    return `${this.resourceType}.${this.resourceName}.execution_role_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get stack_set_id(): string {
    return `${this.resourceType}.${this.resourceName}.stack_set_id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get template_body(): string {
    return `${this.resourceType}.${this.resourceName}.template_body`;
  }
}
